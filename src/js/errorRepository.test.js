import ErrorRepository from './errorRepository';

test('Existing error', () => {
  const received = new ErrorRepository();
  received.addError('001', 'Error example');
  expect(received.translate('001')).toEqual('Error example');
});

test('Existing error', () => {
  const received = new ErrorRepository();
  received.addError('001', 'Error example');
  expect(received.translate('002')).toEqual('Code does not exist. Add it at first');
});
