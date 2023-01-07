import React, {useRef, useState} from "react";
import {Document, Page} from 'react-pdf/dist/esm/entry.webpack';
import {makeStyles} from "tss-react/mui";
import {Button, Grid} from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Manual = () => {

    const useStyles = makeStyles()((theme) => {
        return {
            pdf: {
                overflow: 'hidden',
                'canvas': {
                    width: '100%!important',
                    height: 'auto!important'
                },
                '.annotationLayer': {
                    display: 'none'
                }
            }
        }
    });

    const { classes } = useStyles();
    const [numPages, setNumPages] = useState<number>(1);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess( {numPages}: any ) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    function changePage(offset: number) {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    }

    function previousPage() {
        changePage(-1);
    }

    function nextPage() {
        changePage(1);
    }

    return (
        <div>
            <Document className={classes.pdf} file={'/Manuale-BB2020-Ita-V3.0.pdf'} onLoadSuccess={onDocumentLoadSuccess}>
                    <Page pageNumber={pageNumber} />
            </Document>
            <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"}>
                <Grid item xs={12} textAlign={"center"}>
                    <p>
                        Page {pageNumber} of {numPages}
                    </p>
                </Grid>

                <Button disabled={pageNumber <= 1} onClick={previousPage}>
                    <ArrowBackIosIcon />
                </Button>
                <Button
                    disabled={pageNumber >= numPages}
                    onClick={nextPage}
                >
                    <ArrowForwardIosIcon />
                </Button>
            </Grid>

        </div>
    );
}

export default Manual;
