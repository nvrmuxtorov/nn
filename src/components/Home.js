import React, { useState } from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import bag from "./assets/assets.png";
import { date } from "./store";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import Inventory2Icon from '@mui/icons-material/Inventory2';

export default function Home() {
  const [a, setA] = useState(0);
  const [isClicked, setIsClicked] = useState(false); 
  const [t, setT] = useState("В избранное");

  const backpack = (index) => { 
    let click = isClicked
    let son = a;
    let butt = t;
    if (isClicked===false) {
      son++;
      setA(son);
      click=true
      setIsClicked(click);
      butt = "Добавлено";
      setT(butt);
    } else {
      son--;
      setA(son);
      butt = "В избранное";
      setT(butt);
      click=false
      setIsClicked(click);
    }
  };

  return (
    <Container maxWidth="xl" sx={{ display: 'flex', flexDirection: "column", alignItems: 'center' }}>
      <Typography variant='h2' sx={{ textAlign: "center" }}>В корзине: {a} товар</Typography>
      <Box sx={{ display: 'flex', gap: "8px", marginTop: "10px" }}>
        <Button variant='outlined' color='inherit'>Показать первые 5</Button>
        <Button variant='outlined' color='inherit'>Показать все</Button>
        <Button variant='outlined' color='inherit'>корзине</Button>
      </Box>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "20px", marginTop: "76px", alignItems: "center", justifyContent: "center" }}>
        {date.map((item, index) =>
          <Box key={index} sx={{ width: '364px', height: "474px", border: "1px solid black" }}>
            <Box sx={{ width: '364px', height: "199px", backgroundColor: "transparent", display: 'flex', alignItems: "center", justifyContent: "center" }}>
              <img src={bag} alt="" />
            </Box>
            <Box sx={{ width: '364px', boxSizing: 'border-box', height: "275px", background: "#000000", padding: "30px" }}>
              <Typography variant='h6' sx={{ color: 'white', fontSize: '24px', marginBottom: '11px' }}>
                {item.title}
              </Typography>
              <Typography variant='p' sx={{ color: "rgba(255, 255, 255, 0.56)", textAlign: "center", fontSize: "15px" }}>
                {item.description}
              </Typography>
              <Box sx={{ marginTop: "15px", display: 'flex', gap: "23px" }}>
                <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "center" }}>
                  <AttachMoneyIcon sx={{ color: 'blue' }} />
                  <Typography sx={{ color: "white", fontSize: "24px" }}>106</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "center" }}>
                  <StarBorderOutlinedIcon sx={{ color: 'blue' }} />
                  <Typography sx={{ color: "white", fontSize: "24px" }}>3.9</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "center" }}>
                  <Inventory2Icon sx={{ color: 'blue' }} />
                  <Typography sx={{ color: "white", fontSize: "24px" }}>3.9</Typography>
                </Box>
              </Box>
              <Button
                onClick={() => backpack(index)} 
                variant='outlined'
                sx={{
                  background: isClicked ? 'blue' : 'white' , 
                  width: "280px",
                  height: "50px",
                  '&:hover': {background: isClicked ? 'blue' : 'white'  }
                }}
              >
                {t}
              </Button>
            </Box>
          </Box>
        )}
      </Box>

    </Container>
  );
}

