import { setupWorker } from 'msw';

import { beetellerMock } from '@/core/services/beeteller/beeteller.mock';

export const worker = setupWorker(...beetellerMock);
