import React from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
// import CV from './CV.pdf'
import styles from './CV.module.css'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
 
const CVPage = () => {
    return (
        <div className={styles.CV}>
            <Document file="/CV.pdf">
                <Page pageNumber={1} 
                    renderMode="svg"
                    scale={1.25}
                    renderAnnotationLayer={false} 
                    renderTextLayer={true}/>
            </Document>
            <a href="/CV.pdf" download>Download</a>
        </div>
    )
}

export default CVPage