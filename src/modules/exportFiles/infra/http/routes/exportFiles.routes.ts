import { Router } from 'express';

// import ensureAuthenticated from '@modules/authentication/infra/http/middleware/ensureAuthenticated';
import ExportFilesController from '../controllers/ExportFilesController';

const ExportFilesRouter = Router();
const exportFilesController = new ExportFilesController();

// TransactionsRouter.use(ensureAuthenticated);

ExportFilesRouter.get('/:filetype', exportFilesController.extract);

export default ExportFilesRouter;
