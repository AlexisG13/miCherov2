import { User } from '../entities/users.entity';
import { EntityRepository, Repository } from 'typeorm';
import { AuthCredentialsDto } from 'src/auth/dto/auth.credentials.dto';
import { ConflictException } from '@nestjs/common';
import { genSalt, hash } from 'bcrypt';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const { username, password } = authCredentialsDto;
    const exists = await this.findOne({ username });
    if (exists) {
      throw new ConflictException('User already exists');
    }
    const salt = await genSalt();
    const hashedPassword = await hash(password, salt);
    const user = new User(username, hashedPassword, salt);
    user.save();
  }
}
