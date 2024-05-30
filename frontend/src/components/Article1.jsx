import React, { useState, useEffect } from "react";
import "./css/Articledata.css";
import CommentAdd from "./Comment_add";
import Banner from "./Banner";
import Articlepost from "./Articlepost";
import { Container, Row, Col } from "react-bootstrap";
import { Typography } from "@mui/material";

function Article1() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/articles")
      .then((res) => res.json())
      .then((result) => {
        setArticles(result);
      });
  }, []);

  return (
    <div className="Article1">
      {/* <!-- Banner --> */}
      <Banner title="บทความเพื่อสุขภาพ" page="Articles" />
      {/* <!-- END Banner --> */}
      <Container
        className="mt-5"
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Row>
          <Col xs={12} sm={8}>
            <div
              className="w3-padding"
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h1 className="fw-bold">5 อันดับโรคร้าย NCDs !! ที่คนไทยเสี่ยงเป็นสูง ตรวจก่อนป้องกันได้</h1>
              <hr />
            </div>
            <div className="w3-padding" style={{ textAlign: "center" }}>
              <img
                src="https://pathlab.co.th/wp-content/uploads/2023/10/1200x1200px-search-health-article-knowledge-global-top-5-most-dangerous-ncds-diseases.jpg"
                alt="Norway"
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              />
            </div>
            <div className="w3-padding">
              <h2>
                5 โรคร้ายที่คุณจะได้รับข้อมูลนี้ จัดอยู่ในกลุ่มโรคไม่ติดต่อเรื้อรัง (NCDs) เป็นสาเหตุอันดับหนึ่งของการเสียชีวิตและความพิการไปทั่วโลก
                โดยโรค NCDs เป็นกลุ่มอาการที่ไม่ได้เกิดจากการติดเชื้อเฉียบพลันอย่างรุนแรงเป็นหลัก
              </h2>
            </div>

            <div className="container container-sm">
              <hr />
              <div className="container w3-padding fs-5 text-black-50">
                <ul>
                  <li>
                    <p>
                      ⌜โรคร้ายที่คนไทยมีแนวโน้มเป็นกันสูงขึ้นมาโดยตลอด⌟ ได้แก่ โรคมะเร็ง โรคหลอดเลือดหัวใจ โรคเบาหวาน โรคความดันโลหิตสูง โรคหัวใจ
                      จัดอยู่ในกลุ่มโรคไม่ติดต่อเรื้อรัง (Non-communicable diseases; NCDs) คือ ไม่สามารถแพร่เชื้อจากคนสู่คนได้
                      อาการเรื้อรังเหล่านี้ส่วนใหญ่เกิดจากปัจจัยเสื่อมภายในร่างกายที่ถูกกระตุ้นจากปัจจัยเสี่ยงด้านพฤติการใช้ชีวิตของตนเอง
                      และปัจจัยเสี่ยงภายนอกส่งเสริมกัน
                    </p>
                    <br />
                  </li>
                  <li>
                    <p>
                      ⌜โรค NCDs คร่าชีวิตผู้คนประมาณ 41 ล้านคนในแต่ละปีทั่วโลก⌟ ซึ่งเทียบเท่ากับ 71% ของการเสียชีวิตทั้งหมด
                      ในส่วนของทวีปอเมริกามีผู้เสียชีวิต 5.5 ล้านคนจากโรคไม่ติดต่อเรื้อรัง (NCDs)
                    </p>
                    <br />
                  </li>
                  <li>
                    <p>
                      ⌜โรค NCDs เป็นสาเหตุอันดับ 1 ของการเสียชีวิตและความพิการทั่วโลก⌟ โดยคิดเป็น 74% ของการเสียชีวิตทั้งหมด และมากกว่า 3 ใน 4
                      ปีที่อาศัยอยู่กับความพิการหรือเสมือนพิการ โดยได้ถูกเฝ้าระวังให้เป็นโรคระบาดแห่งแห่งศตวรรษที่ 21 จากหน่วยงานสาธารณสุขทั่วโลก
                      ได้แก่ โรคมะเร็ง โรคหลอดเลือดหัวใจ โรคเบาหวาน โรคความดันโลหิตสูง โรคหัวใจสมอง โรคระบบทางเดินหายใจเรื้อรัง โรคไตเรื้อรัง
                      โรคทางระบบประสาท โรคทางจิต และอื่นๆ ปัจจุบันกลุ่มโรค NCDs นี้อยู่ในฐานะ “โรคที่คร่าชีวิตผู้คนทั่วโลก”
                      ข้อมูลจากหน่วยงานด้านสุขภาพแห่งสหประชาชาติ (UN) พบว่าทุกๆ 2 วินาที จะมีผู้เสียชีวิต 1 รายที่มีอายุต่ำกว่า 70 ปีนับจาก โรค NCDs
                    </p>
                    <br />
                  </li>
                  <li>
                    <p>
                      ⌜โรคมะเร็ง⌟ คือ คือ กลุ่มของโรคที่เกิดจากเซลล์ของร่างกายมีความผิดปกติ ที่ DNA หรือสารพันธุกรรม หรือสารพันธุกรรม
                      หรือโรคที่เกิดจากความเสี่อมของไมโทคอนเดรีย (Mitochondria) เป็นอวัยวะภายในเซลล์แต่เซล์
                      ทำหน้าที่สำคัญเป็นจุดเริ่มต้นของการผลิตพลังงานในร่างกายและมีสารพันธุกรรมหรือดีเอ็นเอเป็นของตัวเองอย่างเฉพาะ
                      หากเกิดความผิดปกติจะส่งผลให้เซลล์มีการเจริญเติบโต มีการแบ่งตัวเพื่อเพิ่มจำนวนเซลล์ รวดเร็ว และมากกว่าปกติ
                      ทำให้เกิดการแพร่ของเซลล์หรือก้อนเนื้อที่ผิดปกติ
                      และในที่สุดก็จะทำให้เกิดการทำลายของเซลล์ปกติที่อยูใกล้กับก้อนเนื้อมะเร็งที่แบ่งตัวเจริญเติบโตขึ้นนั้น
                      เพราะสาเหตุจากการขาดเลือดไปเลี้ยงเซลล์ปกติที่เซลล์มะเร็งสามารถมีความสามารถแย่งพื้นที่การเจริญเติบโตจากหลอดเลือดและสารอาหารได้ดีกว่าเซลล์ปกติเพื่อความอยู่รอดของเซลล์มะเร็งนั้นเอง
                      โดยจะเรียกชื่อโรคมะเร็งตามอวัยวะที่เกิดขึ้น เช่น มะเร็งปอด มะเร็งสมอง มะเร็งเต้านม มะเร็งปากมดลูก มะเร็งเม็ดเลือดขาว
                      มะเร็งต่อมน้ำเหลือง และมะเร็งผิวหนัง เป็นต้น ส่งผลให้เซลล์มีการเจริญเติบโต มีการแบ่งตัวเพื่อเพิ่มจำนวนเซลล์ รวดเร็ว
                      และมากกว่าปกติ ทำให้เกิดก้อนเนื้อผิดปกติ
                      และในที่สุดก็จะทำให้เกิดการตายของเซลล์ปกติที่อยู่ใกล้กับก้อนเนื้อมะเร็งที่เจริญเติบโตขึ้นนั้น
                    </p>
                    <br />
                    <p>
                      ✧ สิ่งแวดล้อมต่างๆ ไม่ว่าจะเป็นสารเคมีสังเคราะห์สำหรับผสมอาหารหรือเครื่องดื่มแปรรูป การเสพติดน้ำตาล รสเค็มหรืออาหารรสจัด
                      เจอมลภาวะ เช่น ควันจากการเผาไหม้ ฝุ่น PM2.5 และความเครียด ยิ่งหากคุณได้รับหรือสัมผัสกับสภาวะเหล่านี้เป็นเวลาต่อเนื่องและยาวนาน
                      จะส่งผลต่อการอักเสบระดับเซลล์และ “นิวเคลียส” ที่เป็นศูนย์รวมรหัสพันธุกรรม (DNA) ของคุณ
                      และมากไปกว่านั้นยังผลกระทบต่อไปยังภายในถึงสิ่งเล็กๆ แต่สามารถส่งผลต่อสุขภาพคุณได้ในภาพรวมนั้นคือ “ไมโตคอนเดรีย (Mitochondria)”
                      ที่อยู่ภายในของเซลล์ ทีมีหน้าที่ให้สัญญาณระหว่างเซลล์กับกระบวนต่างๆ ที่เกิดขึ้นภายในเซลล์ การผลิตพลังงาน
                      กระบวนการเผาผลาญในร่างกาย (Metabolism) การเจริญเติบโตของเซลล์หรือการแยกเซลล์ออกจากกัน
                      เป็นเหมือนเครื่องจักรที่ควบคุมและประสานงานการเกิดและทำลายเซลล์ที่เสื่อมสภาพ ดังนั้น เมื่อระบบเผาผลาญพัง (Metabolic Syndrome)
                      ที่ร่างกายจะแสดงภาวะของมีภาวะน้ำหนักเกินหรืออ้วนลงพุง ที่เป็นจุดเริ่มต้นของโรคไม่ติดต่อเรื้อรัง (NCDs) ซึ่งมีโรคหลักๆ
                      ตามตัวอย่าง 5 โรคร้ายในเนื้อหานี้
                      และนี่จะเป็นการบ่งชี้ว่าไมโตคอนเดรียของคุณมีปัญหาหรือเสียหายจากการอักเสบระดับเซลล์ได้เกิดขึ้นและต้องได้รับการฟื้นฟูด้านสุขภาพได้แล้ว
                      และจะส่งผลต่อสิ่งที่จะเกิดขึ้นต่อมา คือ นิวเคลียสหรือสารพันธุกรรมของคุณก็จะเกิดความเสียหายและกลายพันธุ์
                      ทำให้เกิดการแบ่งตัวอย่างผิดปกติของเซลล์นั้นๆ และแพร่กระจายกลายเป็นเชื้อ หรือที่เราเรียกว่า โรคมะเร็ง ที่เป็น 1 ใน 5 โรค NCDs
                      ที่สำคัญ ที่เรากำลังกล่าวถึงนี้
                    </p>
                    <br />
                    <li style={{ listStyle: "none" }}>
                      <p className="fw-bold">✧ วิธีสร้างความแข็งแรงให้กับไมโตคอนเดรียแห่งเซลล์คุณ</p>
                      <p>
                        [1] กินอาหารต่อวันไม่ถี่เกินไป หรืออาจพิจารณาวิธีการกินอาหารแบบ IF, 2MAD, OMAD อย่างเข้าใจและถูกวิธี
                        โดยจำเป็นต้องได้รับคำแนะนำและการประเมินความเหมาะสมอย่างต่อเนื่องกับแพทย์หรือผู้เชี่ยวชาญด้านสุขภาพของคุณ
                        เพราะหากสุขภาพคุณยังไม่พร้อมจะมีผลข้างเคียงได้{" "}
                      </p>
                      <p>
                        [2] เลือกกินหรือปรุงอาหารจากวัตถุดิบธรรมชาติ (Whole Foods) หลีกเลี่ยงอาหารแปรรูปหรือสำเร็จรูป
                        ที่จะมีส่วนผสมทางเคมีขั้นสูงที่ดูจากฉลากแล้วต้องใช้การแปลหรือตีความทางวิทยาศาสต์
                        อาหารหรือเครื่องดื่มทีมีสัดส่วนสารให้ความหวานที่มาก อาหารเค็มจัด เผ็ดจัด และเครื่องดื่มดื่มแอลกอฮอล์{" "}
                      </p>
                      <p>[3] ออกกำลังกายอย่างสม่ำเสมอ หรือพิจารณาการออกกำลังกายแบบ HIIT Excercise </p>
                      <p>[4] มีความคิดเชิงบวก และมีวิธีการจัดการกับความเครียดได้ดี </p>
                      <p>[5] นอนหลับพักผ่อนอย่างเพียงพอ </p>
                      <p>[6] งดสูบบุหรี่ กัญชา หรือการได้รับควันจากการเผาไหม้ หลีกเลี่ยงและป้องกันมลพิษทางอากาศ</p>
                    </li>
                    <br />
                  </li>
                  <li>
                    <p>
                      ⌜โรคหลอดเลือดหัวใจ⌟ คือ เกิดจากความเสื่อมของผนังหลอดเลือดแดงที่นำเลือดไปเลี้ยงกล้ามเนื้อหัวใจ
                      และอีกสาเหตุเกิดจากการสะสมของคอเลสเตอรอล หรือไขมันจับตัว หรือสารต่างๆ ภายในหลอดเลือด จนเกิดคราบไขมัน (Plaque)
                      เกาะอยู่บริเวณผนังหลอดเลือดหัวใจ ส่งผลให้เส้นเลือดหัวใจตีบแคบลง หากปรากฏการณ์นี้เกิดขึ้นที่หลอดเลือดเลี้ยงหัวใจ
                      จะทำให้เลือดหล่อเลี้ยงหัวใจได้ไม่ดีไม่ทั่วถึงจนทำให้เซลล์หัวใจตายได้ หรือเกิดการหลุดของคราบไขมันปะปนไปยังกระแสเลือด
                      อาจทำให้เกิดการอุดกั้นการไหลเวียนของเลือด ทำให้เกิดภาวะกล้ามเนื้อหัวใจขาดเลือดเฉียบพลัน (โรคหัวใจขาดเลือด)
                      ซึ่งอาจร้ายแรงถึงขั้นเสียชีวิตได้
                    </p>
                    <br />
                  </li>
                  <li>
                    <p>
                      ⌜โรคความดันโลหิตสูง⌟
                      เกิดจากความดันเลือดมีความรุนแรงอย่างผิดปกติที่จะส่งผลทำให้ผนังหลอดเลือดมีความเสี่ยงได้รับความเสียหายหรือแตกขาด
                      และส่งผลให้หัวใจทำงานหนัก ความดันโลหิตสูงเรื้อรังเป็นภัยเงียบที่ส่งต่ออาการกำเริบของโรคร้ายแรงอื่นๆ เช่น โรคอัมพฤกษ์ อัมพาต
                      หัวใจวาย โรคหลอดเลือดหัวใจตีบ โรคสมองขาดเลือดหรือหลอดเลือดสมอง ภาวะหลอดเลือดตีบหรือโป่งพอง โรคไตวาย โรคอัลไซเมอร์
                      โรคประสาทตาเสื่อม เป็นต้น
                    </p>
                    <br />
                  </li>
                  <li>
                    <p>
                      ⌜โรคหัวใจ⌟ เกิดจากสภาวะการทำงานที่ผิดปกติของระบบหัวใจ โรคหัวใจเป็นสาเหตุต้นๆ ของการเสียชีวิตทั่วโลกคือ
                      โรคหลอดเลือดหัวใจตีบหรืออุดตัน ซึ่งพบได้มากในผู้สูงอายุ ตามมาด้วยโรคลิ้นหัวใจ โรคหัวใจพิการแต่กำเนิด
                      และโรคกล้ามเนื้อหัวใจขาดเลือดเฉียบพลันหรือโรคหัวใจวายเฉียบพลัน ผู้สูงอายุมีความเสี่ยงต่อการเป็นโรคหัวใจ
                      แต่ในปัจจุบันกลับพบว่าคนที่อายุยังน้อย เช่น เด็กเล็ก หรือวัยรุ่นก็มีความเสี่ยงเป็นโรคหัวใจได้สูงขึ้น
                    </p>
                    <br />
                  </li>
                  <li>
                    <p>
                      การระบาดของโรค NCDs ประมาณ 80% สามารถป้องกันและหลีกเลี่ยงจากปัจจัยที่กระตุ้นความเสี่ยง เช่น การกินอาหารที่ไม่ดีต่อสุขภาพ
                      (อาหารหวานจัด เค็มจัด อาหารแปรรูปขั้นสูงด้วยความร้อนสูงและสารปรุงแต่งทางเคมี) การรับมือกับความเครียด
                      การพักผ่อนที่ไม่เพียงพอเป็นประจำ การไม่ออกกำลังกายอย่างสม่ำเสมอ การสูบบุหรี่ การดื่มแอลกอฮอล์
                      และอยู่ในพื้นที่ที่มีความเสี่ยงมลพิษทางอากาศ
                      หากหลีกเลี่ยงปัจจัยกระตุ้นเหล่านี้จะช่วยป้องกันหรือชะลอการเจ็บป่วยที่เกี่ยวข้องกับโรค NCDs และการเสียชีวิตก่อนวัยอันควรได้
                    </p>
                    <br />
                  </li>
                  <li>
                    <p>
                      การศึกษาพบว่าโครงสร้างทางสังคมที่เกิดการพัฒนาทางด้านเศรษฐกิจที่นำหน้าองค์ความรู้ด้านสุขภาพและคุณภาพชีวิตของประชาชาชนที่ถูกทิ้งไว้ข้างหลัง
                      เช่นการเกิดการพัฒนาด้านอุตสาหกรรมอาหารและเครื่องดื่มแปรรูปขั้นสูงพร้อมสารเคมีปรุงแต่งอาหารให้อยู่ได้นาน สร้างการเสพติดในรสชาติ
                      เพื่อให้ธุรกิจเกิดผลกำไรสูงสุดแต่หากผู้บริโภคบริโภคอาหารเหล่านั้นเป็นระยะเวลานาน
                      สารเคมีแปลกปลอมที่สะสมก็จะส่งผลให้เซลล์ในร่างกายเกิดการอักเสบเสื่อมลงอย่างไม่รู้ตัว
                      หรือการเกิดการพัฒนาของระบบเทคโนโลยีการสื่อสารหรือปัญญาประดิษฐ์ที่เร่งการแข่งขันในด้านธุรกิจที่เร่งรีบในการสร้างผลกำไรที่อาจจะละเลยสุขภาพของพนักงานหรือแรงงาน
                      การปล่อยมลภาวะอย่างผิดกฎหมายจากการพัฒนาเมืองและแหล่งอุตสาหกรรมก็จะส่งผลต่อน้ำเน่าเสีย
                      อุณหภูมิโลกที่ร้อนขึ้นที่จะมาสร้างปัญหาด้านสุขภาพในทางอ้อมได้เช่นกัน
                      เหตุนี้จึงทำให้เกิดกระบวนการเสื่อมภายในร่างกายที่จะก่อโรคในบุคคล เป็นพื้นฐานไปสู่ประชากรในสังคมนั้นๆ
                      ที่จะก่อให้เกิดความเสี่ยงโรคจากพฤติกรรมหรือไลฟ์สไตล์การใช้ชีวิต
                    </p>
                    <br />
                  </li>
                  <li>
                    <p>
                      ถ้าคุณวางแผนที่จะมีไลฟ์สไตล์เป็นผู้ที่มีอายุยืนอย่างแข็งแรงไปสู่ช่วงวัยเกษียณ หากให้สุขภาพโดยรวมดีอย่างต่อเนื่อง
                      สิ่งสำคัญคือควรหมั่นอัพเดตความรู้ข้อเท็จจริงด้านสุขภาพ และควรพิจารณาเพิ่มเติมในวิธีอื่นๆ ร่วมด้วย เช่น วิธีรับมือกับความเครียด
                      การออกกำลังกายสม่ำเสมอ พักผ่อนนอนหลับให้เพียงพอ และการตรวจสุขภาพประจำปี
                    </p>
                  </li>
                  <br />
                  <p>
                    5 โรคร้ายที่คุณจะได้รับข้อมูลนี้ จัดอยู่ในกลุ่มโรคไม่ติดต่อเรื้อรัง (NCDs)
                    เป็นสาเหตุอันดับหนึ่งของการเสียชีวิตและความพิการไปทั่วโลก โดยโรค NCDs
                    เป็นกลุ่มอาการที่ไม่ได้เกิดจากการติดเชื้อเฉียบพลันอย่างรุนแรงเป็นหลัก
                    แต่จะส่งผลร้ายแรงเมื่อเกิดการสะสมความเสื่อมเป็นระยะนานพอภายในร่างกายจนถึงจุดหนึ่งเมื่อเจอเหตุปัจจัยภายนอก เช่น การติดเชื้อไวรัส
                    การเจอความเครียด การเกิดอุบัติเหตุบางอย่าง ก็จะทำให้เกิดผลกระทบต่อสุขภาพที่อาจจะแสดงอาการเริ่มจากการเจ็บป่วยออดๆ แอดๆ
                    ไปจนถึงขั้นแอดมิทที่โรงพยาบาล ความรุนแรงของโรคขึ้นอยู่กับบุคคล
                    โรคดังกล่าวมีผลกระทบที่อาจเกิดขึ้นตามสถานการณ์การใช้ชีวิตของแต่ละบุคคล รวมถึงคุณภาพชีวิต และผลกระทบทางสังคมและเศรษฐกิจในวงกว้าง
                    โรค NCDs เป็นสาเหตุสำคัญของภาวะร้ายแรงของโรค และนี้คือ 5 อันดับโรคร้ายแห่งยุคดิจิตอล
                    อยากให้คุณรู้เพื่อป้องกันและลดความเสี่ยงก่อนจะสายไป
                  </p>
                  <br />
                </ul>
                <h1>5 อันดับโรคร้าย คุณรู้ไวป้องกันความเสี่ยงได้ทัน</h1>
                <br />
                <p className="fs-2">อันดับ ① โรคมะเร็ง</p>
                <p>
                  คือ กลุ่มของโรคที่เกิดจากเซลล์ของร่างกายมีความผิดปกติ ที่ DNA หรือสารพันธุกรรม หรือโรคที่เกิดจากความเสี่อมของไมโทคอนเดรีย
                  (Mitochondria) เป็นองค์ประกอบภายในเซลล์แต่ละเซลล์
                  ทำหน้าที่สำคัญเป็นจุดเริ่มต้นของการผลิตพลังงานในร่างกายและมีสารพันธุกรรมหรือดีเอ็นเอเป็นของตัวเองอย่างเฉพาะ
                  หากเกิดความผิดปกติจะส่งผลให้เซลล์มีการเจริญเติบโต มีการแบ่งตัวเพื่อเพิ่มจำนวนเซลล์ รวดเร็ว และมากกว่าปกติ ทำให้เกิดก้อนเนื้อผิดปกติ
                  และในที่สุดก็จะทำให้เกิดการตายของเซลล์ปกติที่อยู่ใกล้กับก้อนเนื้อมะเร็งที่เจริญเติบโตขึ้นนั้น
                  เพราะสาเหตุจากการขาดเลือดไปเลี้ยงเซลล์ปกติที่เซลล์มะเร็งสามารถมีความสามารถแย่งพื้นที่การเจริญเติบโตจากหลอดเลือดและสารอาหารได้ดีกว่าเซลล์ปกติเพื่อความอยู่รอดของเซลล์มะเร็งนั้นเอง
                  โดยจะเรียกชื่อโรคมะเร็งต่างตามอวัยวะที่เกิดขึ้น เช่น มะเร็งปอด มะเร็งสมอง มะเร็งเต้านม มะเร็งปากมดลูก มะเร็งเม็ดเลือดขาว
                  มะเร็งต่อมน้ำเหลือง และมะเร็งผิวหนัง เป็นต้น
                </p>
                <br />
                <p>
                  หากทำคุณได้เข้าใจและเห็นภาพมากขึ้นอีกสักนิดต่อการกระตุ้นกระบวนการเกิดมะเร็งอย่างคร่าวๆ สิ่งแวดล้อมต่างๆ
                  ไม่ว่าจะเป็นสารเคมีสังเคราะห์สำหรับผสมอาหารหรือเครื่องดื่มแปรรูป การเสพติดน้ำตาล รสเค็มหรืออาหารรสจัด เจอมลภาวะ เช่น
                  ควันจากการเผาไหม้ ฝุ่น PM2.5 ความเครียด และเชื้อไวรัสบางชนิด ยิ่งหากคุณได้รับหรือสัมผัสกับสภาวะเหล่านี้เป็นเวลาต่อเนื่องและยาวนาน
                  จะส่งผลต่อการอักเสบระดับเซลล์และ “นิวเคลียส” ที่เป็นศูนย์รวมรหัสพันธุกรรม (DNA) ของคุณ
                  และมากไปกว่านั้นยังผลกระทบต่อไปยังภายในถึงสิ่งเล็กๆ แต่สามารถส่งผลต่อสุขภาพคุณได้ในภาพรวมนั้นคือ “ไมโตคอนเดรีย (Mitochondria)”
                  ที่อยู่ภายในของเซลล์ ทีมีหน้าที่ให้สัญญาณระหว่างเซลล์กับกระบวนต่างๆ ที่เกิดขึ้นภายในเซลล์ การผลิตพลังงาน กระบวนการเผาผลาญในร่างกาย
                  (Metabolism) การเจริญเติบโตของเซลล์หรือการแยกเซลล์ออกจากกัน
                  เป็นเหมือนเครื่องจักรที่ควบคุมและประสานงานการเกิดและทำลายเซลล์ที่เสื่อมสภาพ ดังนั้น เมื่อระบบเผาผลาญพัง (Metabolic Syndrome)
                  ที่ร่างกายจะแสดงภาวะของมีภาวะน้ำหนักเกินหรืออ้วนลงพุง ที่เป็นจุดเริ่มต้นของโรคไม่ติดต่อเรื้อรัง (NCDs) ซึ่งมีโรคหลักๆ ตามตัวอย่าง 5
                  โรคร้ายในเนื้อหานี้
                  และนี่จะเป็นการบ่งชี้ว่าไมโตคอนเดรียของคุณมีปัญหาหรือเสียหายจากการอักเสบระดับเซลล์ได้เกิดขึ้นและต้องได้รับการฟื้นฟูด้านสุขภาพได้แล้ว
                  และจะส่งผลต่อสิ่งที่จะเกิดขึ้นต่อมา คือ นิวเคลียสหรือสารพันธุกรรมของคุณก็จะเกิดความเสียหายและกลายพันธุ์
                  ทำให้เกิดการแบ่งตัวอย่างผิดปกติของเซลล์นั้นๆ และแพร่กระจายกลายเป็นเชื้อ หรือที่เราเรียกว่า โรคมะเร็ง ที่เป็น 1 ใน 5 โรค NCDs
                  ที่สำคัญ ที่เรากำลังกล่าวถึงนี้
                </p>
                <br />
                <p>2 รูปแบบการกลายพันธ์ุของยีนมะเร็ง</p>
                <p className="d-inline fw-bold">แบบที่ 1 </p>
                <p className="d-inline">
                  การกลายพันธุ์ที่ถูกกระตุ้นจากสิ่งแวดล้อม เชื้อไวรัส ซึ่งเกิดจากพฤติกรรมการใช้ชีวิต หรือที่เราได้นำเสนอไปข้างต้นนี้
                </p>
                <ul>
                  <li>
                    <p>เซลล์ที่กลายพันธ์ุจากภาวะผิดปกติของร่างกาย หรือจากการสัมผัสสิ่งกระตุ้นที่ก่อโรคมะเร็งชนิดต่าง ๆ</p>
                  </li>
                  <li>
                    <p>โรคมะเร็งส่วนใหญ่ ประมาณ 90-95% เกิดได้สูงในรูปแบบนี้</p>
                  </li>
                </ul>
                <br />
                <p className="d-inline fw-bold">แบบที่ 2 </p>
                <p className="d-inline">การกลายพันธุ์จากของยีนที่ถ่ายทอดทางพันธุกรรม (จากรุ่นพ่อแม่ถ่ายทอดส่งต่อไปสู่รุ่นลูกหลาน)</p>
                <ul>
                  <li>
                    โรคมะเร็ง ประมาณ 5-10% ที่จะเกิดจากการถ่ายทอดทางพันธุกรรมหรือโรคมะเร็งที่ถ่ายทอดทางพันธุกรรม (Hereditary cancer) เช่น มะเร็งเต้านม
                    มะเร็งรังไข่มะเร็งกระดูก มะเร็งเม็ดเลือดขาวหรือโครลูคีเมีย เป็นต้น
                  </li>
                </ul>
                <br />
                <p className="fw-bold">วิธีสร้างความแข็งแรงไปถึงระดับเซลล์และไมโตคอนเดรียของคุณ</p>
                <ul>
                  <li>
                    กินอาหารต่อวันทั้งมื้อหลักและอาหารว่างไม่ถี่เกินไป หรืออาจพิจารณาวิธีการกินอาหารแบบ IF, 2MAD, OMAD อย่างเข้าใจและถูกวิธี
                    โดยจำเป็นต้องได้รับคำแนะนำและการประเมินความเหมาะสมอย่างต่อเนื่องกับแพทย์หรือผู้เชี่ยวชาญด้านสุขภาพของคุณ
                    เพราะหากสุขภาพคุณยังไม่พร้อมจะมีผลข้างเคียงได้
                  </li>
                  <li>
                    เลือกกินหรือปรุงอาหารจากวัตถุดิบธรรมชาติ (Whole Foods) หลีกเลี่ยงอาหารแปรรูปหรือสำเร็จรูป
                    ที่จะมีส่วนผสมทางเคมีขั้นสูงที่ดูจากฉลากแล้วต้องใช้การแปลหรือตีความทางวิทยาศาสต์
                    อาหารหรือเครื่องดื่มทีมีสัดส่วนสารให้ความหวานที่มาก อาหารเค็มจัด เผ็ดจัด และเครื่องดื่มดื่มแอลกอฮอล์
                  </li>
                  <li>ออกกำลังกายอย่างสม่ำเสมอ หรือพิจารณาการออกกำลังกายแบบ HIIT Excercise</li>
                  <li>มีความคิดเชิงบวก และมีวิธีการจัดการกับความเครียดได้ดี</li>
                  <li>นอนหลับพักผ่อนอย่างเพียงพอ</li>
                  <li>งดสูบบุหรี่ กัญชา หรือการได้รับควันจากการเผาไหม้ หลีกเลี่ยงและป้องกันมลพิษทางอากาศ</li>
                </ul>
                <br />
                <ul>
                  <p className="fw-bold">ค่าการตรวจเลือดที่ประเมินโรคมะเร็ง (Tumor Marker)</p>
                  <li>ค่า AFP ( Alpha-fetoprotein) – ตรวจวัดสารบ่งชี้มะเร็งตับ</li>
                  <li>ค่า CEA (Carcinoembryonic Antigen) – ตรวจวัดสารบ่งชี้มะเร็งลำไส้</li>
                  <li>ค่า PSA (Prostate Specific Antigen) ตรวจวัดสารบ่งชี้มะเร็งต่อมลูกหมาก</li>
                  <li>
                    ค่า NSE (Neuron-specific Enolase) – ตรวจสารบ่งชี้มะเร็งปอด ช่วยประเมินและติดตามผลการรักษาโรคมะเร็งปอด (Small Cell Lung Cancer) และ
                    Neuroblastoma
                  </li>
                  <li>
                    ค่า beta-HCG (Beta-human chorionic gonadotropin) – ตรวจวัดสารบ่งชี้มะเร็งเยื่อบุโพรงมดลูก (choriocarcinoma)
                    และหากไม่ใช่ผู้ที่อยู่ในภาวะการตั้งครรภ์ ผู้มีมะเร็งปอดบางรายก็สามารถตรวจพบ beta-HCG สูงเกินปกติได้
                  </li>
                  <li>ค่า CA 125 – ตรวจวัดสารบ่งชี้มะเร็งรังไข่</li>
                  <li>ค่า CA 19-9 – ตรวจวัดสารบ่งชี้มะเร็งตับอ่อน</li>
                  <li>ค่า CA 15-3 – ตรวจวัดสารบ่งชี้มะเร็งเต้านม</li>
                </ul>
                <br />
                <p>
                  หากข้อมูลสถิติทะเบียนมะเร็งประเทศไทย* ปี 2565 โดยสถาบันมะเร็งแห่งชาติ รายงานว่าประเทศไทยจะมีแนวโน้มจำนวนผู้ป่วยมะเร็งรายใหม่กว่า
                  140,000 คน หรือประมาณ 400 คนต่อวัน โดยโรคมะเร็งที่พบมาก 5 อันดับแรกในคนไทย ได้แก่ มะเร็งตับและท่อน้ำดี มะเร็งปอด มะเร็งเต้านม
                  มะเร็งลำไส้ใหญ่/ทวารหนัก และมะเร็งปากมดลูก โดยในเพศชายเป็นมะเร็งตับและท่อน้ำดีมากที่สุด ส่วนเพศหญิงเป็นมะเร็งเต้านมมากที่สุด
                  ปัจจัยภายนอกที่ก่อความเสี่ยงให้เกิดมะเร็ง ได้แก่ การสูบบุหรี่ การดื่มเครื่องดื่มแอลกอฮอล์ การกินอาหารที่มีสารก่อมะเร็ง
                  การสูดมลพิษทางอากาศ เป็นต้น และปัจจัยภายใน เช่น ภาวะภูมิคุ้มกันบกพร่อง การสืบทอดทางพันธุกรรม เป็นต้น
                </p>
                <br />
                <p className="fs-2">อันดับ ② โรคหลอดเลือดหัวใจ</p>
                <p>
                  เกิดจากความเสื่อมของผนังหลอดเลือดแดงที่นำเลือดไปเลี้ยงกล้ามเนื้อหัวใจ และอีกสาเหตุเกิดจากการสะสมของคอเลสเตอรอล หรือไขมันจับตัว
                  ลิ่มเลือด หรือสารต่างๆ ภายในหลอดเลือด จนเกิดคราบไขมัน (Plaque) เกาะอยู่บริเวณผนังหลอดเลือดหัวใจ ส่งผลให้เส้นเลือดหัวใจตีบแคบลง
                  หากปรากฏการณ์นี้เกิดขึ้นที่หลอดเลือดเลี้ยงหัวใจ จะทำให้เลือดหล่อเลี้ยงหัวใจได้ไม่ดีไม่ทั่วถึงจนทำให้เซลล์หัวใจตายได้
                  หรือเกิดการหลุดของคราบไขมันปะปนไปยังกระแสเลือด อาจทำให้เกิดการอุดกั้นการไหลเวียนของเลือด
                  ทำให้เกิดภาวะกล้ามเนื้อหัวใจขาดเลือดเฉียบพลัน (โรคหัวใจขาดเลือด) ซึ่งอาจร้ายแรงถึงขั้นเสียชีวิตได้
                </p>
                <br />
                <p className="fw-bold">ค่าการตรวจเลือดที่ประเมินโรคหลอดเลือดหัวใจ</p>
                <ul>
                  <li>
                    ค่า hs-CRP (C-reactiveโปรตีน) ตรวจภาวะการอักเสบในร่างกาย สารบ่งชี้การอักเสบของหลอดเลือดแดง
                    และช่วยประเมินความเสี่ยงโรคหัวใจเป็นผลให้เกิดการอักเสบในหลอดเลือดแดงโปรตีนในเลือดที่บ่งชี้การอักเสบเพิ่มเติม ได้แก่ เฟอร์ริติน
                    (Ferritin)
                  </li>
                  <li>
                    ค่า HCY (Homocysteine) ตรวจระดับสารที่ก่อให้เกิดความเสี่ยงโรคหลอดเลือดหัวใจและสมองตีบหรืออุดตัน กล้ามเนื้อหัวใจตาย
                    การพบระดับของค่า HCY ที่เพิ่มจะมีความสัมพันธ์ต่อการเกิดโรคหัวใจและหลอดเลือดหัวใจมากยิ่งขึ้น
                  </li>
                  <li>ค่า PT (INR) (Prothrombin Time) หาภาวะโรคเลือดออกง่าย หรือหยุดยาก ตรวจระยะเวลาที่เลือดกำลังจะแข็งตัว</li>
                </ul>
                <p className="fs-2">อันดับ ③ โรคเบาหวาน</p>
                <p>
                  คือ โรคความเสื่อมกระบวนการเผาผลาญพลังงานจากน้ำตาลในเลือดให้เป็นสามารถเป็นพลังงาน
                  ซึ่งกระบวนการนี้เกี่ยวข้องกับฮอร์โมนอินซูลินที่สร้างจากตับอ่อนเพื่อใช้ควบคุมระดับน้ำตาลในเลือด
                  แต่ทว่าระดับน้ำตาลในเลือดคุณนั้นมีสูงเกินอย่างต่อเนื่องและเรื้งรังสะสมเป็นระยะเวลานานพอ ที่จะเกิดภาวะดื้อต่ออินซูลิน
                  ทำให้ร่างกายไม่สามารถควบคุมระดับน้ำตาลในเลือดที่สูงขึ้นที่จะทำลายเซลล์ในร่างกายให้เกิดความเสื่อมที่จะส่งผลต่อการเกิดโรคไม่ติดต่อเรื้อรัง
                  (โรค NCDs) เช่น โรคอ้วน โรคความดันโลหิตสูง โรคไขมันในเลือดสูง โรคหัวใจและหลอดเลือด โรคไขมันพอกตับ โรคไตวาย โรคทางสมองและประสาท เช่น
                  โรคสมองเสื่อม โรคอัลไซเมอร์ โรคพาร์กินสัน เป็นต้น
                </p>
                <br />
                <p className="fw-bold">ค่าการตรวจเลือดที่ประเมินโรคเบาหวาน</p>
                <ul>
                  <li>
                    ค่า FBS หรือ GLU (Fasting Blood Sugar/Glucose) ตรวจระดับน้ำตาลในเลือดหลังจากอดอาหาร 8 ชม. [โดยสามารถดื่มน้ำได้ตามปกติ]
                    เพื่อใช้ในการคัดกรอง และวินิจฉัยผู้ที่มีอาการแสดงหรือมีปัจจัยเสี่ยงเป็นเบาหวาน
                  </li>
                  <li>
                    ค่า HbA1C (Hemoglobin A1C) ตรวจวัดระดับน้ำตาลสะสมในช่วง 3 เดือนที่ผ่านมา ตรวจรวมภาวะอื่นๆ เช่น กระหายน้ำบ่อยผิดปกติ
                    น้ำหนักเกินมีภาวะลงพุงหรือน้ำหนักตัวลดลงอย่างไม่ทราบสาเหตุ ปัสสาวะบ่อย มีระดับไขมันในเลือดผิดปกติ
                  </li>
                </ul>
                <p className="fs-2">อันดับ ④ โรคความดันโลหิตสูง</p>
                <p>
                  เกิดจากความดันเลือดมีความรุนแรงอย่างผิดปกติที่จะส่งผลทำให้ผนังหลอดเลือดมีความเสี่ยงได้รับความเสียหายหรือฉีกขาด
                  และส่งผลให้หัวใจทำงานหนัก ความดันโลหิตสูงเรื้อรังเป็นภัยเงียบที่ส่งผลต่ออาการกำเริบของโรคร้ายแรงอื่นๆ เช่น โรคอัมพฤกษ์ อัมพาต
                  หัวใจวาย โรคหลอดเลือดหัวใจตีบ โรคสมองขาดเลือดหรือหลอดเลือดสมอง ภาวะหลอดเลือดตีบหรือโป่งพอง โรคไตวาย โรคอัลไซเมอร์ โรคประสาทตาเสื่อม
                  เป็นต้น
                </p>
                <br />
                <p className="fw-bold">ค่าการตรวจเลือดที่ประเมินโรคความดันโลหิตสูง</p>
                <ul>
                  <li>ค่าตรวจความดันเลือด หากความดันตัวบนเกิน 140 หรือตัวล่างเกิน 90 มิลลิเมตรปรอท บ่งชี้ความร้ายแรงของโรคความดันโลหิตสูง</li>
                  <li>
                    ค่าไขมันในเส้นเลือด (Lipid Profiles Test)
                    ภาวะการเกิดไขมันในเส้นเลือดมีความสัมพันธ์กับความเสี่ยงโรคหลอดเลือดหัวใจที่จะมีผลต่อความเสี่ยงโรคความดันสูง
                  </li>
                </ul>
                <p className="fs-2">อันดับ ⑤ โรคหัวใจ</p>
                <p>
                  เกิดจากสภาวะการทำงานที่ผิดปกติของระบบหัวใจ โรคหัวใจเป็นสาเหตุต้นๆ ของการเสียชีวิตทั่วโลกคือ โรคหลอดเลือดหัวใจตีบหรืออุดตัน
                  ซึ่งพบได้มากในผู้สูงอายุ ตามมาด้วยโรคลิ้นหัวใจ โรคหัวใจพิการแต่กำเนิด และโรคกล้ามเนื้อหัวใจขาดเลือดเฉียบพลันหรือโรคหัวใจวายเฉียบพลัน
                  ผู้สูงอายุมีความเสี่ยงต่อการเป็นโรคหัวใจ แต่ในปัจจุบันกลับพบว่าคนที่อายุยังน้อย เช่น เด็กเล็ก
                  หรือวัยรุ่นก็มีความเสี่ยงเป็นโรคหัวใจได้สูงขึ้น
                </p>
                <br />
                <p className="fw-bold">ค่าการตรวจเลือดที่ประเมินโรคหัวใจ</p>
                <ul>
                  <li>ค่า CPK (Creatine Phosphokinase) ตรวจวัดเอมไซม์ที่พบเมื่อมีการสลายกล้ามเนื้อ หัวใจ สมอง</li>
                  <li>
                    ค่า hs-CRP (C-reactive Protein) บ่งชี้การอักเสบของหลอดเลือดแดง และช่วยประเมินความเสี่ยงโรคหัวใจ ระดับ CRP
                    ผิดปกติมีความสัมพันธ์และไวต่อการก่อเกิดโรคเลือดหัวใจอุดตัน ที่จะนำมาประเมินการโรคหัวใจในอนาคต
                  </li>
                  <li>ค่า HCY (Homocysteine) ระดับของค่า HCY ที่เพิ่มบ่งชี้ความเสี่ยงโรคหัวใจและหลอดเลือดโรคหลอดเลือดส่วนปลายเส้นเลือดดำอุดตัน</li>
                </ul>
                <p className="fs-2">สาเหตุร่วมที่ใช้ประเมินความเสี่ยงในเบื้องต้นของ 5 โรคดังกล่าว</p>
                <p>
                  ถ้าพูดกันแบบตรงไปตรงมา 5 โรคร้ายดังกล่าว เป็นโรคที่คุณสร้างเองโดยไม่รู้ตัวหรือเป็นพฤติกรรมที่คุณคุ้นชินไปกับชีวิตประจำวัน
                  เนื่องจากพฤติกรรมหรือไลฟ์สไตล์การใช้ชีวิตที่ส่งเสริมให้เสี่ยงต่อโรคดังกล่าวนั้น เช่น
                </p>
                <ul>
                  <li>
                    การกินอาหารต่อวันที่ถี่มากไป พร้อมกับการเลือกกินอาหารที่ไม่ดีต่อสุขภาพ (การเสพติดน้ำตาล อาหารหวานจัด เค็มจัด ทอดกรอบ
                    อาหารแปรรูปขั้นสูงด้วยสารปรุงแต่งทางเคมี)
                  </li>
                  <li>การรับมือกับความเครียดได้ไม่ดี</li>
                  <li>การไม่ออกกำลังกาย</li>
                  <li>การสูบบุหรี่ การดื่มแอลกอฮอล์</li>
                  <li>และอยู่ภายใต้ความเสี่ยงมลพิษทางอากาศ</li>
                </ul>
                <p className="fs-2">ทางเลือกในการดูแลสุขภาพเพื่อป้องกันโรคร้าย</p>
                <ul>
                  <li>
                    หมั่นหาความรู้หรืออัพเดตองค์ความรู้ด้านสุขภาพอย่างต่อเนื่อง เพื่อนำมาประยุกต์ใช้ในกรดูแลสุขภาพได้อย่างเข้าใจและเหมาะกับตนเอง
                  </li>
                  <li>เลิกสูบบุหรี่หรือการรับควันบุหรี่มือสอง รวมถึงป้องกันตนเองโดยไม่พาตนเองไปเสี่ยงในพื้นที่ควันหรือมลพิษทางอากาศโดยไม่จำเป็น</li>
                  <li>หลีกเลี่ยงการดื่มเครื่องดื่มแอลกอฮอล์ในปริมาณที่มากเกินไป</li>
                  <li>
                    กรณีที่ผู้ป่วยเป็น 5 โรคดังกล่าว รวมถึงโรคเรื้อรัง NCDs อื่นๆ เช่น โรคระบบเผาผลาญอาหารพัง โรคไต โรคตับ ฯลฯ
                    ควรปฏิบัติตามคำแนะนำของแพทย์หรือผู้เชี่ยวชาญด้านสุขภาพอย่างเคร่งครัด
                  </li>
                  <li>นอนหลับพักผ่อนให้เพียงพอ</li>
                  <li>เรียนรู้ที่จะจัดการและอยู่กับความเครียดให้ได้ รวมถึงการปรึกษาแพทย์หรือผู้เชี่ยวชาญด้านการรักษาความเครียด</li>
                  <li>
                    เลือกรับประทานอาหารเพื่อสุขภาพ พร้อมเน้นบำรุงหลอดเหลือด หัวใจ ป้องกันการเกิดภาวะดื้ออินซูลิน เช่น
                    อาหารแบบเมดิเตอร์เรเนียนหรือแบบสแกนดิเนเวียร์ ที่จะมุ่งเน้นอาหารจากธรรมชาติให้มากที่สุด โดยแหล่งอาหารควรเป็นแหล่งอาหารจากธรรมชาติ
                    เช่น ผักสีเขียว บรอกโคลี พืชตระกูลถั่ว ปลา เนื้อสัตว์ ไข่ ผลิตภัณฑ์จากนม และรับประทานโปรตีนจากเนื้อปลา สัตว์ปีก ไข่
                    และผลิตภัณฑ์จากนมในปริมาณเพียงพอต่อมื้อ ลดอาหารแปรรูปให้ได้น้อยมากที่สุดหรือไม่นำมาบริโภค ใช้น้ำมันจากน้ำมันมะกอกบริสุทธิ์ (Extra
                    Virgin Olive Oil: EVOO ) หรือน้ำมันมะพร้าวหรือน้ำมันที่ไม่ผ่านกระบวนการความร้อนสูงในการประกอบอาหาร
                    เน้นรับประทานผลไม้เป็นของว่างแทนของหวาน เช่น สตรอเบอร์รี่ แบล็คเบอรี่ แอปเปิ้ล มะเขือเทศ และกีวี่
                    อีกทั้งจำกัดการดื่มแอลกอฮอล์ในปริมาณที่พอดี หากเป็น ⌜อาหารไทย⌟ สามารถรับประทานผักสดกับน้ำพริกไทยที่มีส่วนประสมของหอมแดง กระเทียม
                    และยิ่งดีหากสามารถจัดหาน้ำพริกดังกล่าวนี้ได้ทุกมื้อ จะยิ่งเป็นการช่วยสนับสนุนสุขภาพของระบบหลอดเลือดหัวใจและสมองได้เป็นอย่างดี
                  </li>
                  <li>รักษาน้ำหนักและความดันโลหิตให้อยู่ในเกณฑ์ปกติ</li>
                  <li>ออกกำลังกายพร้อมกับฝึกลมหายใจอย่างสม่ำเสมอ เช่น การออกกำลังกายแบบแอโรบิกหรือแบบ HIIT Excercise การฝึกโยคะ เป็นต้น</li>
                  <li>หมั่นตรวจสุขภาพเป็นประจำ</li>
                  <li>หากตรวจประเมินแล้วพบว่าเป็นโรค NCDs ใดๆ แล้ว ควรอยู่ภายใต้การดูแลรักษาของแพทย์ผู้เชี่ยวชาญ</li>
                </ul>
                <br />
                <p className="fs-2">สรุป</p>
                <p>
                  5 โรคร้ายที่กล่าวมานี้ โรคไม่ติดต่อเรื้อรัง (โรค NCDs) เป็นมากกว่าปัญหาด้านสุขภาพส่วนบุคคล
                  ผู้คนทั่วโลกตั้งแต่เด็กไปจนถึงวัยเกษียณต่างได้รับความเสี่ยงจากปัจจัยภายนอก
                  ในระดับครัวเรือนส่วนใหญ่การเสียค่าใช้จ่ายเป็นค่าพยาบาลสำหรับโรค NCDs ส่งผลให้ผู้คนประมาณ 100
                  ล้านคนทั่วโลกตกอยู่ใต้เส้นความความยากจนหรือรายได้ที่สูญเสียไปไม่เกิดผลกำไรที่จะส่งผลต่อการพัฒนาเศรษฐกิจ
                  ปัจจัยทางวัฒนธรรมและสิ่งแวดล้อม
                </p>
                <br />
                <p>
                  การศึกษาพบว่าโครงสร้างทางสังคมที่เกิดการพัฒนาทางด้านเศรษฐกิจที่นำหน้าองค์ความรู้ด้านสุขภาพและคุณภาพชีวิตของประชาชาชนที่ถูกทิ้งไว้ข้างหลัง
                  เช่น การเกิดการพัฒนาด้านอุตสาหกรรมอาหารและเครื่องดื่มแปรรูปขั้นสูงพร้อมสารเคมีปรุงแต่งอาหารให้อยู่ได้นาน
                  สร้างการเสพติดในรสชาติด้วยสารเคมีผสมอาหาร เพื่อให้ธุรกิจเกิดผลกำไรที่สูงสุด แต่หากผู้บริโภคบริโภคอาหารเหล่านั้นไปก็เป็นระยะเวลานาน
                  สารเคมีแปลกปลอมที่สะสมก็จะส่งผลให้เซลล์ในร่างกายเกิดการอักเสบเสื่อมลงอย่างไม่รู้ตัว
                  หรือการเกิดการพัฒนาของระบบเทคโนโลยีการสื่อสารหรือปัญญาประดิษฐ์ที่เร่งการแข่งขันในด้านธุรกิจที่เร่งรีบในการสร้างผลกำไรที่อาจจะละเลยสุขภาพของพนักงานหรือแรงงาน
                  การปล่อยมลภาวะอย่างผิดกฎหมายจากการพัฒนาเมืองและแหล่งอตสาหกรรมก็จะส่งผลต่อน้ำเน่าเสีย
                  อุณหภูมิโลกที่ร้อนขึ้นที่จะมาสร้างปัญหาด้านสุขภาพในทางอ้อมได้เช่นกัน
                  เหตุนี้จึงทำให้เกิดกระบวนการเสื่อมภายในร่างกายที่จะก่อโรคในบุคคล เป็นพื้นฐานไปสู่ประชากรในสังคมนั้น
                  ที่จะก่อให้เกิดความเสี่ยงโรคจากพฤติกรรมหรือไลฟ์สไตล์การใช้ชีวิต
                </p>
                <p>
                  ถ้าคุณวางแผนที่จะมีไลฟ์สไตล์เป็นผู้ที่มีอายุยืนอย่างแข็งแรงไปสู่ช่วงวัยเกษียณ หากให้สุขภาพโดยรวมดีอย่างต่อเนื่อง
                  สิ่งสำคัญคือควรหมั่นอัพเดตความรู้ข้อเท็จจริงด้านสุขภาพ และควรพิจารณาเพิ่มเติมในวิธีอื่นๆ ร่วมด้วย เช่น วิธีรับมือกับความเครียด
                  การออกกำลังกายสม่ำเสมอ พักผ่อนนอนหลับให้เพียงพอ และการตรวจสุขภาพประจำปี
                </p>
              </div>
            </div>
            <br />
          </Col>

          {/* <!-- Introduction menu --> */}
          <Articlepost postList={articles} />
          {/* <!-- END Introduction Menu --> */}
        </Row>
      </Container>
      {/* <!-- Comment --> */}
      <CommentAdd />
      {/* <!-- END Comment --> */}
    </div>
  );
}
export default Article1;
