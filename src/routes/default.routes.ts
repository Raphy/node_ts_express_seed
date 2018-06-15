import { DefaultController } from '../controllers/default.controller';
import { Kernel } from '../kernel';

export class DefaultRoutes {
    public static register(kernel: Kernel): void {
        kernel.app.route('/')
              .get(DefaultController.getIndex)
        ;
    }
}
