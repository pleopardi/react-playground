import React from "react";
import dayjs from "dayjs";
import jsPDF from "jspdf";

const textRows = Array.from({ length: 100 }, (_, index) => `Row ${index + 1}`);

function generatePDF() {
  const date = dayjs().format("DD-MM-YYYY, H.mm");
  const fileName = `Report ${date}.pdf`;
  const horizontalMargin = 15;
  const pageHeight = 297;
  const title = `Report ${date}`;
  const verticalMargin = 15;

  const pdf = new jsPDF("p", "mm", "a4");

  // Add title
  pdf.setFontSize(20);
  pdf.text(horizontalMargin, verticalMargin, title);

  // Setup body
  pdf.setFontSize(11);
  const lineHeight = pdf.getLineHeight();
  let y = 2 * verticalMargin;

  // Add body
  textRows.forEach(textRow => {
    if (y > pageHeight - lineHeight) {
      y = verticalMargin;
      pdf.addPage();
    }

    pdf.text(horizontalMargin, y, textRow);

    y += lineHeight;
  });

  pdf.save(fileName);
}

function App() {
  return <button onClick={generatePDF}>Generate PDF</button>;
}

export default App;
