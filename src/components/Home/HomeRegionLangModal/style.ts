import styled, { css } from 'styled-components';

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
`;

const ModalLayer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 784px;
  background-color: white;

  .modal-header {
    width: 100%;
    padding: 20px 0;
    text-align: center;
    border-bottom: 1px solid #e9eff4;
    .modal-title {
      font-size: 0.9375rem;
      font-weight: bold;
      line-height: 1.4;
    }
    .modal-close-btn {
      position: absolute;
      top: 0;
      right: -55px;
      background: none;
      border: none;
      cursor: pointer;
    }
  }
  .radio-group {
    display: flex;
    flex-wrap: wrap;
    padding: 0 30px 18px 10px;
    border-bottom: 1px solid #e9eff4;
    background-color: #fafafa;

    .radio-about {
      display: flex;
      align-items: center;
      width: 100%;
      margin: 24px 20px 20px 20px;
      font-size: 0.75rem;
      line-height: 1;
      color: #222222;
    }
    .garena-region {
      display: flex;
      align-items: center;
      width: 100%;
      margin: 24px 20px 20px 20px;
      line-height: 1;
      font-size: 0.75rem;
    }
  }

  .modal-warning {
    text-align: center;
    vertical-align: center;
    font-size: 0.75rem;
    font-weight: bold;
    color: red;
    background-color: #f3faf9;
  }
  @media only screen and (max-width: 330px) {
    .radio-group {
      justify-content: center;
      align-items: center;
    }
  }
`;

const ModalRadionContainer = styled.div<{ imagePath?: string; checked?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: ${({ imagePath }) => (imagePath ? '25%' : '16%')};
  margin-top: 12px;

  .region-lang-radio {
    overflow: hidden;
    border: 0;
    position: absolute;
    width: 1px;
    height: 1px;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
  }
  .region-lang-block {
    position: relative;
    display: flex;
    flex-basis: 100%;
    align-items: center;
    justify-content: space-between;
    min-width: 100px;
    margin-left: 20px;
    padding: ${({ imagePath }) => (imagePath ? '0 0 0 34px' : '0')};
    cursor: pointer;
  }
  .region-lang-label {
    flex-basis: 80%;
    font-size: 0.75rem;
    color: #777777;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    ${({ checked }) =>
      checked &&
      css`
        color: #4a90e2;
        font-weight: bold;
      `}
  }

  .region-lang-block::after {
    content: '';
    flex-basis: 16px;
    height: 16px;

    background: ${({ checked }) =>
      checked ? 'url(/assets/region/btn-check-on.png)' : 'url(/assets/region/btn-check-off.png)'};
  }

  ${({ imagePath }) =>
    imagePath &&
    css`
      .region-lang-block::before {
        content: '';
        position: absolute;
        left: 0;
        width: 26px;
        height: 26px;
        margin-right: 8px;
        background: url(${imagePath});
      }
    `}
`;

const ModalSubmitContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px 0;
  background-color: #f3faf9;

  .modal-selected {
    display: flex;
    align-items: center;
    font-size: 0.75rem;
    color: #222222;

    span {
      margin-right: 14px;
    }
    p {
      line-height: 1.5;
      font-weight: bold;
      color: #4a90e2;
    }
  }
  .modal-selected::before {
    content: '';
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 4px;
    background: url('/assets/region/btn-check-on.png');
  }
  .modal-selected:nth-of-type(2) {
    margin-left: 20px;
  }
  .selected-region {
    margin-left: 4px;
  }
  button[type='submit'] {
    height: 28px;
    border-radius: 2px;
    background-color: #4a90e2;
    border: solid 1px #2767b2;
    margin-left: 30px;
    padding: 0 9px;
    color: #fff;
    line-height: 15px;
    font-size: 12px;
    vertical-align: middle;
  }
`;

export default {
  ModalContainer,
  ModalLayer,
  ModalContent,
  ModalRadionContainer,
  ModalSubmitContainer,
};
