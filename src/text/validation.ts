export const validation = {
  required: (what: string) => `Informe ${what}`,
  selectRequired: (what: string) => `Selecione ${what}`,
  emailInvalid: 'E-mail inválido',
  passwordMin: 'A senha deve ter pelo menos 6 caracteres',
  passwordMismatch: 'As senhas não coincidem',
  passwordSameAsOld: 'A nova senha deve ser diferente da senha atual',
};
