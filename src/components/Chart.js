import React from "react";
import styled from "styled-components";
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { WrongNoteButton } from "./styles";

const StyledChartContainer = styled.div`
  max-width: 600px; /* 최대 너비 설정 */
  margin: 0 auto; /* 중앙 정렬 */
  margin-top: 20px;
`;

const StyleCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Chart = ({ chartData, totalTime, handleShowWrongNote }) => {
  return (
    <StyledChartContainer>
      <Doughnut
        data={chartData}
        options={{
          plugins: {
            legend: {
              display: true,
              position: "bottom",
            },
          },
        }}
        width={400}
        height={300}
      />
      <StyleCenter>
        <p>퀴즈를 마칠 때까지 소요된 시간: {totalTime}</p>
        <WrongNoteButton onClick={handleShowWrongNote}>
          오답 노트 보기
        </WrongNoteButton>
      </StyleCenter>
    </StyledChartContainer>
  );
};

export default Chart;
