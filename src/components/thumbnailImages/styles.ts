import styled from "styled-components";

export const ThumbnailWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(200px, 1fr);
  grid-gap: 0.6rem;
  align-items: center;
`;

export const Miniature = styled.img`
  width: 400px;
  height: auto;
  object-fit: cover;
  cursor: pointer;
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;
