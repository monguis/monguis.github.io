import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import samplePDF from './Juan Carlos Castellanos Navarro resume.pdf';

export default class PDF extends Component {
  state = {
    numPages: null,
  }

  onDocumentLoadSuccess = (document) => {
    const { numPages } = document;
    this.setState({
      numPages,
    });
  };

  render() {
    const { numPages } = this.state;

    return (
      <Document
        file={samplePDF}
        onLoadSuccess={this.onDocumentLoadSuccess}
      >
        {Array.from(
          new Array(numPages),
          (el, index) => (
            <Page scale={0.5}
            width={window.innerWidth*2}
            
              key={`page_${index + 1}`}
              pageNumber={index + 1}
            />
          ),
        )}

        <div id="fixed">
          Download
        </div>
      </Document>
    );
  }
}
// class PDF extends Component {
//   state = {
//     numPages: null,
//     pageNumber: 1,
//   }
 
//   onDocumentLoadSuccess = ({ numPages }) => {
//     this.setState({ numPages });
//   }
 
//   render() {
//     const { pageNumber, numPages } = this.state;
 
//     return (
//       <div style={{width:"100%"}}>
//         <Document
//           file={samplePDF}
//           onLoadSuccess={this.onDocumentLoadSuccess}
//         >
//           <Page width={window.innerWidth} pageNumber={pageNumber} />
//         </Document>
//         <p>Page {pageNumber} of {numPages}</p>
//       </div>
//     );
//   }
// }

// export default PDF;

// file="../../../public/assets/Juan Carlos Castellanos Navarro resume.pdf"
// file="https://github.com/monguis/monguis.github.io/raw/master/client/public/assets/Juan%20Carlos%20Castellanos%20Navarro%20resume.pdf"