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

    const item_data:any = null;

    // const { data: item_data } = await axios.post<any>(
    //   'https://api.pluggy.ai/items',
    //   { connectorId: 8, parameters: {
    //       user: 'user-ok',
    //       password: 'password-ok',
    //     } 
    //   },
    //   {
    //     headers: { 'X-API-KEY': apiKey },
    //   },
    // );
    // console.log(item_data);

    const item_key = item_data !== null ? data.id : process.env.ACCOUNT_ID;

    const { data : data_item } = await axios.get(
      `https://api.pluggy.ai/accounts?itemId=${item_key}`, 
      {
        headers: { accept: 'application/json', 'content-type': 'application/json', 'X-API-KEY': apiKey },
      },
    );

    if(data_item.total > 0) {
      const results = (value:any) =>  {
        if(value.type == "BANK"){
          return value.id;
        }
          ;
      }
      const account:any = data_item.results.filter(results);

      const { data: data_transaction } = await axios.get(
        `https://api.pluggy.ai/transactions?accountId=${account[0].id}`, 
        {
          headers: { accept: 'application/json', 'content-type': 'application/json', 'X-API-KEY': apiKey },
        },
      );

      return data_transaction;
    } else {
      return new Error();
    }
  }
}

export default ExtractService;
