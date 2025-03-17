import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { Admin } from './admin.schema';
// import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin.name) private adminModel: Model<Admin>,
    // private jwtService: JwtService,
  ) {}

  async seedAdmin() {
    const existingAdmin = await this.adminModel.findOne();
    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash('Admin123', 10);
      await this.adminModel.create({ email: 'admin@gmail.com', password: hashedPassword });
      console.log('Default admin created: Email: admin@gmail.com, Password: Admin123');
    }
  }

  async login(email: string, password: string) {
    const admin = await this.adminModel.findOne({ email });
    if (!admin || !(await bcrypt.compare(password, admin.password))) {
      throw new BadRequestException('Invalid email or password');
    }
    return { message:'Login Sucessfully' };
  }

  async updatePassword(email: string, oldPassword: string, newPassword: string) {
    const admin = await this.adminModel.findOne({ email });
    if (!admin || !(await bcrypt.compare(oldPassword, admin.password))) {
      throw new BadRequestException('Incorrect old password');
    }
    admin.password = await bcrypt.hash(newPassword, 10);
    await admin.save();
    return { message: 'Password updated successfully' };
  }
}
