import styled, { css } from 'styled-components';

export const Button = styled.div`
  border: 1px solid transparent;
  border-radius: 4px;
  font-weight: 600;
  white-space: nowrap;
  user-select: none;
  -webkit-font-smoothing: antialiased;
  background-image: none;
  display: flex;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  font-size: 16px;
  display: flex;
  position: relative;
  left: 130px;
  bottom: 24.5px;
  max-width: 200px;
  height: 48px;

  color: rgb(255, 255, 255);
  justify-content: center;
  flex: 3 1 0%;
  margin-left: 8px;
  ${(p) =>
    p.disabled
      ? css`
          background: #ccc;
          cursor: not-allowed;
        `
      : css`
          background-color: rgb(67, 176, 42);
          cursor: pointer;
        `}
`;
export const HomeButton = styled.button`
  border: 1px solid transparent;
  border-radius: 4px;
  font-weight: 600;
  white-space: nowrap;
  user-select: none;
  -webkit-font-smoothing: antialiased;
  background-image: none;
  display: flex;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  font-size: 16px;
  display: flex;
  max-width: 200px;
  height: 48px;
  position: relative;
  left: 50px;
  color: rgb(255, 255, 255);
  justify-content: center;
  flex: 3 1 0%;
  ${(p) =>
    p.disabled
      ? css`
          background: #ccc;
          cursor: not-allowed;
        `
      : css`
          background-color: rgb(67, 176, 42);
          cursor: pointer;
        `}
`;

export const Price = styled.h1`
  color: #f30240;
  font-size: 25px;
  line-height: 0.8;
  font-weight: 700;
  display: inline-block;
  vertical-align: middle;
`;

export const Title = styled.h3`
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  margin-bottom: 8px;
`;

export const Badge = styled.div`
  text-align: center;
  max-width: 80px;
  font-weight: 400;
  font-size: 12px;
  margin-left: 4px;
  background-color: #e8104a;
  color: #fff;
  display: inline-block;
  padding: 4px;
  border-radius: 3px;
  vertical-align: middle;
`;

export const PriceBadge = styled.div`
  text-align: center;
  width: 80px;
  height: 35px;
  font-weight: bold;
  padding: 6px;
  font-size: 14px;
  margin-left: 6px;
  background-color: #e8104a;
  color: #fff;
  display: inline-block;
  align-items: center;
  padding: 4px;
  border-radius: 45px;
  vertical-align: middle;
`;
