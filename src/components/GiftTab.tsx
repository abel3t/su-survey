import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Box,
  Button,
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import { Line, Radar } from 'react-chartjs-2';

import { GiftTitle, GiftType, LoveLanguageType } from '../constant';
import { styled } from '@mui/system';
import { IGiftResult } from '../interfaces';

const GiftTab: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [result, setResult]: [IGiftResult[], any] = useState([]);

  useEffect(() => {
    const storageResult: Record<string, number> = JSON.parse(localStorage.getItem('giftResult') || 'null');

    if (storageResult) {
      const _result: IGiftResult[] = Object.entries(storageResult)
          .map(([key, value]: [string, number]) => {
            return {
              id: parseInt(key),
              type: parseInt(key) as LoveLanguageType,
              value
            };
          });
      _result.sort((a: IGiftResult, b: IGiftResult) => b.value - a.value);

      setResult(_result);
    }

    setIsLoaded(true);
  }, []);

  return (
      <div>
        {
            !isLoaded && <div className="mb-3">
              <Skeleton variant="rectangular" height={20} className="mt-1 w-full md:w-3/4 lg:w-2/3"/>
              <Skeleton variant="rectangular" height={50} className="mt-1 w-full md:w-3/4 lg:w-2/3"/>
              <Skeleton variant="rectangular" height={150} className="mt-1 w-full md:w-3/4 lg:w-2/3"/>
              <Skeleton variant="rectangular" height={100} className="mt-1 w-full md:w-3/4 lg:w-2/3"/>
            </div>
        }

        {
            isLoaded && !result.length && <div className="mb-5">
              Chưa có kết quả. Làm khảo sát ngay nhé!</div>
        }

        {
            isLoaded && !!result.length &&
            <Box>
              <p className="mb-5 text-bold">Kết quả của bạn</p>

              {GiftResultTable(result)}
              {/*{GiftLineChartResult(result)}*/}
              {/*{GiftRadarChartResult(result)}*/}
            </Box>
        }

        <Box sx={{ mt: 5 }}>
          <Button variant="contained">
            <Link href="/spiritual-gifts">
              <span>
                Làm {!!result.length && 'lại'} khảo sát
              </span>
            </Link>
          </Button>
        </Box>
      </div>
  );
};

const GiftResultTable = (result: any) => {
  const StyledTableRow = styled(TableRow)(({ theme }: any) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover
    },
    '&:last-child td, &:last-child th': {
      border: 0
    }
  }));

  return (
      <TableContainer component={Paper}>
        <Table aria-label="result table">
          <TableHead>
            <StyledTableRow>
              <TableCell align="left"><strong>STT</strong></TableCell>
              <TableCell align="left"><strong>Tên ân tứ</strong></TableCell>
              <TableCell align="left"><strong>Điểm</strong></TableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {result
                .map(({ id, type, value }: any, index: number) => (
                    <TableRow
                        key={index}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >

                      <TableCell align="left">{index + 1}</TableCell>
                      <TableCell align="left">{GiftTitle[type as GiftType]}</TableCell>
                      <TableCell align="left">{value}</TableCell>
                    </TableRow>
                ))}
          </TableBody>
        </Table>
      </TableContainer>
  );
};

const getChartData = (result: any) => {
  const labels: string[] = [];
  const chartData: number[] = [];
  result.forEach((x: any) => {
    labels.push(GiftTitle[x.type as GiftType]);
    chartData.push(x.mark);
  });

  return {
    labels,
    datasets: [
      {
        label: 'Điểm',
        data: chartData,
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)'
      }
    ]
  };
};

const GiftLineChartResult = (result: any) => {
  const options: any = {
    scale: {
      display: true,
      min: 0,
      max: 50,
      ticks: {
        showLabelBackdrop: false
      }
    },
    responsive: false
  };
  return <Line data={getChartData(result)} options={options}/>;
};

const GiftRadarChartResult = (result: any) => {
  const options: any = {
    scale: {
      display: true,
      min: 0,
      max: 50,
      ticks: {
        showLabelBackdrop: false
      }
    },
    responsive: true
  };
  return <Radar data={getChartData(result)} options={options}/>;
};

export default GiftTab;
