import { PayApiModule } from '@fry/pay-api';
import type { Variations } from '@homer/todo-test';
import { applyMicroPatch } from '@hubert/micro-module';

import { DEFAULT_CONFIG } from '../../../../../--test-config--/adm-config';
import {
    mockedMicroConf,
    provideRouterPredefined,
} from '../../../../../--test-config--/mocked-micro-conf';
import type { DesktopFryTransferByPhoneSchema } from '../../../../../schema.h';
import {bankListApiMockModule} from "@fry/bank-list-api/mocked";

export const successData = {
    success: {
        data: DEFAULT_CONFIG,
        microConf: applyMicroPatch(mockedMicroConf, {
            modules: [PayApiModule,
                bankListApiMockModule({
                    getRequisites: (presets) => () => presets.requisitesRtlnWithBrand,
                }),],
            providers: [provideRouterPredefined({ phone: '9999999999', accountId: '5372669019' })],
        }),
        testInfo: {
            title: 'API Pay должно ответить успешно',
        },
    },
} satisfies Variations<DesktopFryTransferByPhoneSchema>;
