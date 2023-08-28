import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./Accordion.module.css";

export default function AccordionSection() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  return (
    <div className={styles.divText}>
      <h1 className={styles.AccordionHeader}>FAQs</h1>
        <div className={styles.AccordionBox}>
      <Accordion sx={{border:"1px solid #fff",borderRadius:"40px"}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={styles.AccordionArrow} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className={styles.AccordionSummary}
          sx={{backgroundColor:"#121212", color:"#fff", borderRadius:"10px"}}
        >
          <Typography className={styles.AccordionText1}>Is QTify free to use?</Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.AccordionDetails} sx={{display:"flex", alignItems: "center", borderRadius:"10px" }}>
          <Typography className={styles.AccordionText2} sx={{}}>Yes! It is 100% free, and has 0% ads!</Typography>
        </AccordionDetails>
      </Accordion>
        </div>

        <div className={styles.AccordionBox}>
      <Accordion sx={{border:"1px solid #fff",borderRadius:"40px"}} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={styles.AccordionArrow} />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          className={styles.AccordionSummary}
          sx={{backgroundColor:"#121212", color:"#fff", borderRadius:"10px"}}
        >
          <Typography className={styles.AccordionText1}>Can I download and listen to songs offline?</Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.AccordionDetails} sx={{display:"flex", alignItems: "center", borderRadius:"10px" }}>
          <Typography className={styles.AccordionText2}>
            Sorry, unfortunately we don't provide the service to download any
            songs.
          </Typography>
        </AccordionDetails>
      </Accordion>
        </div>
    </div>
  );
}
