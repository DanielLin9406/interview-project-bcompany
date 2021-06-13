import { ICustomerDTO } from "../../data-fetching/dtos/ICustomerDTO";

export interface ICustomerState {
  customer: ICustomerDTO | {};
  isAuthenticated: boolean;

  isSigningIn: boolean;
  isSigningInSuccess: boolean;
  isSigningInFailure: boolean;

  // isReadingMe: boolean;
  // isReadingMeSuccess: boolean;
  // isReadingMeFailure: boolean;

  // isLoggingOut: boolean;
  // isLoggingOutSuccess: boolean;
  // isLoggingOutFailure: boolean;

  // isSigningUp: boolean;
  // isSigningUpSuccess: boolean;
  // isSigningUpFailure: boolean;

  error: string;
}
