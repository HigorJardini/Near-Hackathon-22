import { injectable, inject } from 'tsyringe';
import axios from 'axios';

require('dotenv').config();

// import AppError from '@shared/errors/AppError';
// import IAccountsRepository from '@modules/accounts/repositories/IAccountsRepository';
// import ITransactionsRepository from '../repositories/ITransactionsRepository';
// import Transaction from '../infra/typeorm/entities/Transaction';
// import IExtractDTO from '../dtos/IExtractDTO';

@injectable()
class ExtractService {
  constructor(
    // @inject('TransactionsRepository')
    // private transactionsRepository: ITransactionsRepository,

    // @inject('AccountsRepository')
    // private accountsRepository: IAccountsRepository,
  ) {
    // do nothing.
  }

  public async execute({}: any): Promise<any> {
  
    const { data } = await axios.post(
      "https://api.pluggy.ai/auth", 
      { clientId: process.env.CLIENT_ID, clientSecret: process.env.CLIENTE_SECRET }, 
      {
        headers: { accept: 'application/json', 'content-type': 'application/json' },
      },
    );

    const { apiKey } = data;

    const { data } = await axios.post<any>(
      'https://api.pluggy.ai/items',
      { connectorId: 8, parameters: {
          user: 'user-ok',
          password: 'password-ok',
        } 
      },
      {
        headers: { 'X-API-KEY': apiKey },
      },
    );

    console.log(data);
    
    return "api_key";
  }
}

export default ExtractService;
