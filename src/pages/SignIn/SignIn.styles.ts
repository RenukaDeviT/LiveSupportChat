import media from 'ui/styles/media';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const StyledSignIn = styled.div(
  ({ theme }) => css`
    padding: 40px 49px;
    position: relative;
    width: calc(100% - 98px);
    height: 100%;
    overflow: hidden;

    .sign-in {
      &-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      &__header {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 56px;

        &-logo {
          margin-right: 24px;
        }

        &-title {
          font-family: ${theme.font.family.main};
          font-weight: 275;
          font-size: 30px;
          line-height: 38px;

          color: #000000;
        }
      }

      &-error {
        color: #f04438;
        align-self: flex-start;

        font-family: ${theme.font.family.main};
        font-style: normal;
        font-weight: ${theme.font.weight.sm};
        font-size: 12px;
        line-height: 20px;
      }

      &__images {
        &-leora-meditating {
          position: absolute;
          right: 8.33%;
          top: 15%;
          height: 70%;
          width: 589px;
          object-fit: contain;
        }

        &-cloud {
          &-top,
          &-middle,
          &-bottom {
            position: absolute;
          }

          &-top {
            width: 156px;
            height: 116px;
            right: 40.2%;
            top: 17.8%;
          }

          &-middle {
            width: 338px;
            height: 224px;
            right: -5.28%;
            top: 30%;
          }

          &-bottom {
            width: 507px;
            height: 338px;
            right: 33.8%;
            bottom: -10.46%;

            filter: blur(10.5px);
          }
        }
      }

      &-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 360px;
        width: 100%;
        background: rgba(252, 252, 253, 0.8) !important;
        border: 1px solid #fcfcfd;
        backdrop-filter: blur(8px);
        border-radius: 50px;
        padding: 0px 36px;
        margin-left: 106px;
        z-index: 5;
      }

      &-title,
      &-subtitle {
        color: ${theme.colors.secondaryText};
        align-self: flex-start;
        text-align: center;
      }

      &-title {
        width: 100%;
        font-style: normal;
        font-weight: ${theme.font.weight.sLg};
        font-size: 30px;
        line-height: 38px;
        margin-bottom: 12px;
        text-align: center;
      }

      &-subtitle {
        font-style: normal;
        font-weight: ${theme.font.weight.sm};
        font-size: ${theme.font.size.sm};
        line-height: 21px;
        letter-spacing: ${theme.font.letterSpacing};
        width: 100%;
        color: ${theme.colors.secondaryText};
      }

      &-subtitle--error {
        margin-bottom: 0px;
      }

      &__form {
        width: 100%;
        margin-bottom: 1.5rem;

        &-icon-button {
          margin-right: -6px;
        }

        &-field-name {
          font-weight: ${theme.font.weight.md};
          font-size: 12px;
          line-height: 18px;
          letter-spacing: 0.02em;
          color: ${theme.colors.secondaryText};
          margin-bottom: 6px;
          text-align: left;
        }

        &-email {
          margin-bottom: 20px;
        }

        &-password {
          margin-bottom: 50px;
        }

        &-textfield {
          fieldset {
            border-radius: 16px;
          }

          input {
            padding: 10px 14px;

            font-family: ${theme.font.family.main};
            font-style: normal;
            font-weight: ${theme.font.weight.sm};
            font-size: 12px;
            line-height: 24px;
            color: #121926;
            box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
          }

          input::placeholder {
            color: #697586;
          }

          .MuiInputBase-root {
            background: #ffffff;
            border-radius: 16px;
          }

          .Mui-focused {
            outline: none;

            .MuiOutlinedInput-notchedOutline {
              box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05),
                0px 0px 0px 4px #f4ebff;
              border-width: 1px;
              outline: none;
            }
          }

          .Mui-error {
            .MuiOutlinedInput-notchedOutline {
              border-color: #fda29b;
              border-width: 1px;
              box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
            }
          }

          .Mui-disabled {
            background: #f8fafc;
            border-radius: 16px;
            box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
          }

          .MuiFormHelperText-root {
            margin-left: 0px;
            margin-top: 6px;

            font-family: ${theme.font.family.main};
            font-style: normal;
            font-weight: ${theme.font.weight.sm};
            line-height: 20px;
          }
        }

        &-login-button {
          font-weight: ${theme.font.weight.sLg};
          font-size: 16px;
          line-height: 24px;

          color: #ffffff;
          padding: 12px 18px;
          background: linear-gradient(63.44deg, #4e45ff 16.72%, #cb6ce6 83.39%);
          box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
          border-radius: 16px;
          border: none;
          width: 100%;
          cursor: pointer;
          text-transform: none;
        }

        &-login-button:disabled {
          background: #bebbff;
          border: 1px solid #bebbff;
          box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
          border-radius: 16px;
          color: #ffffff;
        }

        &-login-img-plug {
          width: 50%;
          max-width: 433px;
          width: 100%;
          height: 680px;
        }
      }
    }

    ${media.min.mLg} {
      .sign-in {
        &-wrapper {
          height: calc(100% - 100px);
          justify-content: space-evenly;
        }

        &-container {
          margin-left: 0;
        }

        &__images {
          &-leora-meditating {
            top: 20%;
            right: 15%;
          }

          &-cloud {
            &-top {
              right: 38%;
              top: 40%;
            }

            &-middle {
              top: 50%;
              right: 5%;
            }
          }
        }
      }
    }

    ${media.max.lg} {
      .sign-in {
        &-container {
          margin-left: 0;
        }

        &__images {
          &-leora-meditating {
            right: 0;
          }
        }
      }
    }

    ${media.max.md} {
      padding: 20px 49px;
      position: relative;
      width: calc(100% - 98px);
      height: 100%;
      overflow: hidden;
      bottom: 75px;

      .sign-in {
        &-wrapper {
          display: flex;
          justify-content: center;
        }

        &__form {
          &-login-img-plug {
            display: none;
          }
        }

        &-container {
          margin-left: 0;
        }

        &__header {
          margin-bottom: 135px;
        }

        &__images {
          &-leora-meditating {
            display: none;
          }

          &-cloud {
            &-top {
              top: 8%;
              right: 2.55%;
            }

            &-middle {
              display: none;
            }

            &-bottom {
              right: -8%;
              bottom: -1%;
            }
          }
        }
      }
    }

    ${media.max.sm} {
      padding: 0px 15px;
      width: calc(100% - 30px);
      bottom: 0px;

      .sign-in {
        &__header {
          margin-bottom: 114px;

          &-title {
            font-size: 24px;
            line-height: 38px;
          }

          &-logo {
            margin-right: 18px;
          }
        }

        &-title,
        &-subtitle {
          align-self: center;
        }

        &-container {
          background: inherit;
          border: none;
          justify-content: flex-start;
          padding: 0 10;
        }

        &__images {
          &-cloud {
            &-top {
              top: 5.45%;
              right: -18%;
            }

            &-bottom {
              right: -55.5%;
            }
          }
        }
      }
    }
  `,
);

export default StyledSignIn;
