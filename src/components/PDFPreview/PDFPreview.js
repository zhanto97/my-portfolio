import React from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import CV from './CV.pdf'
import styles from './PDFPreview.module.css'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
 
const ExamplePDFViewer = () => {
    return (
        <div className={styles.PDFPreview}>
            <Document file={CV}>
                <Page pageNumber={1} 
                    renderMode="svg"
                    scale={1.25}
                    renderAnnotationLayer={false} 
                    renderTextLayer={true}/>
            </Document>
        </div>
    )
}

export default ExamplePDFViewer