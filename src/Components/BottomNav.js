import React from "react";
import styled from "styled-components";
import AboutUs from "../assests/AboutUs.png";

const Wrapper = styled.div`
  background-color: black;
  height: 60px;
  color: whitesmoke;
  display: flex;
  align-items: center;
`;

const CopyRightWrapper = styled.div`
  margin-right: 15%;
  margin-left: 15%;
`;
const BottomNav = () => {
  return (
    <>
      <img src={AboutUs} alt="" width={"100%"} />
      <Wrapper>
        <CopyRightWrapper>
          © Copyright 2017 - 2023 | Rubixe is a brand of THINK AHEAD INNOVATIONS
          PVT. LTD. | All Rights Reserved
        </CopyRightWrapper>
      </Wrapper>
    </>
  );
};

export default BottomNav;
