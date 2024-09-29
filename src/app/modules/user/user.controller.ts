import jwt, { JwtPayload } from 'jsonwebtoken';
import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catchAsync';
import { sendResponse, sendResponseWithToken } from '../../utils/sendResponse';
import { UserServices } from './user.service';
import { AppError } from '../../error/appError';
import config from '../../config';

const createUser = catchAsync(async (req, res) => {
  const userData = req.body;
  const result = await UserServices.createUserIntoDB(userData);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is registered successfully',
    data: result,
  });
});

const loginUser = catchAsync(async (req, res) => {
  const userData = req.body;

  const result = await UserServices.loginUser(userData);
  const { accessToken } = result;
  sendResponseWithToken(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is logged in successfully',
    token: accessToken,
    data: result.user,
  });
});

const getUser = catchAsync(async (req, res) => {
  // Assuming the userId is passed as a request parameter
  const { userId } = req.params;

  if (!userId) {
    throw new AppError(httpStatus.BAD_REQUEST, 'User ID is missing');
  }

  const result = await UserServices.getUserFromDB(userId);

  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found');
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User profile retrieved successfully',
    data: result,
  });
});

export const UserControllers = {
  createUser,
  loginUser,
  getUser,
};
