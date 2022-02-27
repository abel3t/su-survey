import React, { useEffect, useState } from 'react';
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
import Link from 'next/link';
import { LoveLanguageDescription, LoveLanguageTitle, LoveLanguageType } from '../constant';
import { ILoveLanguageResult } from '../interfaces';

const LoveLanguages: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [result, setResult]: [ILoveLanguageResult[], any] = useState([]);

  useEffect(() => {
    const storageResult: Record<string, number> = JSON.parse(localStorage.getItem('loveLanguageResult') || 'null');

    if (storageResult) {
      const _result: ILoveLanguageResult[] = Object.entries(storageResult)
          .map(([key, value]: [string, number]) => {
            return {
              id: parseInt(key),
              type: parseInt(key) as LoveLanguageType,
              value
            };
          });
      _result.sort((a: ILoveLanguageResult, b: ILoveLanguageResult) => b.value - a.value);

      setResult(_result);
    }

    setIsLoaded(true);
  }, []);

  return (
      <div className="flex justify-center">
        <div className="p-2 sm:p-3 md:p-5 lg:p-10 w-full md:w-3/4 lg:w-2/3 mb-2">
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
                Em vẫn chưa có kết quả. Hãy làm khảo sát ngay nhé!</div>
          }

          {
              isLoaded && !!result.length &&
              <Box>
                <p className="mb-5 font-bold text-lg">Kết quả của em</p>

                {LoveLanguageResultTable(result)}
                {/*{GiftLineChartResult(result)}*/}
                {/*{GiftRadarChartResult(result)}*/}
              </Box>
          }

          <Box sx={{ mt: 5 }}>
            <Button variant="contained">
              <Link href="/love-languages-survey">
              <span>
                Làm {!!result.length && 'lại'} khảo sát
              </span>
              </Link>
            </Button>
          </Box>
        </div>
      </div>
  );
};

const LoveLanguageResultTable = (result: any) => {
  return (
      <TableContainer component={Paper}>
        <Table aria-label="result table">
          <TableHead>
            <TableRow>
              <TableCell align="left"><strong>STT</strong></TableCell>
              <TableCell align="left"><strong>Tên</strong></TableCell>
              <TableCell align="left"><strong>Mô tả</strong></TableCell>
              <TableCell align="left"><strong>Điểm</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {result
                .map(({ id, type, value }: any, index: number) => (
                    <TableRow
                        key={id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="left">{index + 1}</TableCell>
                      <TableCell align="left"><span
                          className="font-bold text-md">{LoveLanguageTitle[type as LoveLanguageType]}</span></TableCell>
                      <TableCell align="left">{LoveLanguageDescription[type as LoveLanguageType]}</TableCell>
                      <TableCell align="left">{value}</TableCell>
                    </TableRow>
                ))}
          </TableBody>
        </Table>
      </TableContainer>
  );
};

export default LoveLanguages;
