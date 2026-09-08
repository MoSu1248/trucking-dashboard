import { HttpRequest, HttpHandlerFn, HttpInterceptorFn } from '@angular/common/http';

export const authenticationInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
) => {
  const userToken = localStorage.getItem('token');
  console.log('interceptor ran', userToken);
  if (userToken) {
    const modifiedReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${userToken}`),
    });
    return next(modifiedReq);
  }
  return next(req);
};
