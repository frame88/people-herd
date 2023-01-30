export interface IToken
{
  success: boolean;
  errorMessage: string;
  data: {
    token: string;
    refToken: string;
  }
}
