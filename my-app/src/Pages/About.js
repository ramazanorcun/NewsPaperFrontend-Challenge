import React from "react";
import Card from "react-bootstrap/Card";
import "../css/about.css";

function About() {
  return (
    <div className="container">
      <div id="" className="row mt-2">
        <div className="col-4">
          <Card>
            <Card.Img
              variant="top"
              src="data:image/png;base64,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"
            />
            <Card.Body>
              <h4 className="aboutTitles">İLETİŞİM</h4>
              <h5 className="cvText">Telefon</h5>
              <p className="cvText">0545 642 67 69</p>
              <h5 className="cvText">E Mail</h5>
              <p className="cvText">ramazanorcun07@gmail.com</p>
              <h5 className="cvText">Adres</h5>
              <p className="cvText">
                Tepeköy Mahallesi Ağalar Caddesi no:34 <br /> TORBALI/İZMİR
              </p>
              <h5 className="cvText">Github</h5>
              <p className="cvText">
                <a href="https://github.com/ramazanorcun">
                  https://github.com/ramazanorcun
                </a>
              </p>
              <h4 className="aboutTitles">EĞİTİM</h4>
              <h5 className="cvText"> 2017- 2022 LİSANS</h5>

              <p className="cvText">
                BİLECİK ŞEYH EDEBALİ ÜNİVERSİTESİ YÖNETİM BİLİŞİM SİSTEMLERİ
              </p>
              <h5 className="cvText"> 2011-2016 LİSE</h5>

              <p className="cvText">
                DİDİM MESLEKİ VE TEKNİK ANADOLU LİSESİ MUHASEBE VE FİNANSMAN /
                BİLGİSAYARLI MUHASEBE
              </p>

              <h4 className="aboutTitles">SERTİFİKALAR</h4>
              <p>JAVA STANDART EDITION</p>
              <p>
                JAVASCRİPT <br /> (Sertifika no :
                UC-840f50fb-ac26-4e72-9550-6c2265b2955b)
              </p>
              <p>REACT 101 (Turkcell Akademi) </p>
              <p>REACT 102 (Turkcell Akademi) </p>
            </Card.Body>
          </Card>
        </div>
        <div className="col-8">
          <Card>
            <Card.Header className="aboutHeader">
              <h1>Ramazan Orçun</h1>
              <h3>Yönetim Bilişim sistemleri</h3>
            </Card.Header>
            <Card.Body className="mt-5">
              <h4 className="aboutTitles ">PROFİL</h4>

              <div className="grid-container-1">
                <div>
                  <h5>Ad Soyad</h5>
                  <h6>Ramazan Orçun</h6>
                </div>
                <div>
                  <h5>Yabancı Dil</h5>
                  <h6>İngilizce(Orta)</h6>
                </div>
                <div>
                  <h5>Medeni Durum</h5>
                  <h6>Bekar</h6>
                </div>
                <div>
                  <h5>Doğum Tarihi</h5>
                  <h6>27/04/1997</h6>
                </div>
                <div>
                  <h5>Askerli Durumu </h5>
                  <h6>Tecilli(12/2025)</h6>
                </div>
                <div>
                  <h5>Ehliyet</h5>
                  <h6>B-Sınıf</h6>
                </div>
              </div>
              <h4 className="aboutTitles">HAKKIMDA</h4>
              <p>
                Çalışma ortamı içinde iletişimi iyi,uyumlu ve disiplinli
                birisiyim. Karşıma çıkan problemler de azimli birşekil de sorunu
                çözmek için sonuna kadar pes etmeden çalışmaya özen gösteririm.
                Önüme çıkan probemlerde pratik yollar geliştirebilen biriyim.
                Zaman yönetimi, planlama ve ekip çalışmalarında ortak çalışmaya
                özen gösteririm.
              </p>
              <h4 className="aboutTitles">PROJELER VE TEKNİKLER</h4>
              <p>
                <span>1. Alışveriş Sitesi = </span> Projede React- Redux
                kullandım. Login sayfası oluşturdum. JWT token kullandım.
                Kullanıcıların, ürün ekleyip, silebileceği ve güncelleyebileceği
                platform oluşturdum. Kullanıcının, ürünlerin kategorilerini ve
                alt kategorilerini görebileceği sayfa oluşturdum. Sepete ürün
                ekleme gerçekleştirdim. Material UI, ReactStrap ve
                ReactBootstrap kütüphanelerini kullandım.
              </p>
              <p>
                <span>1. Alışveriş Sitesi = </span> Projede React- ReduxToolkit
                kullandım. PHP/Laravel ve MySql kullanarak projenin backendini
                oluşturdum. Login sayfası oluşturdum. JWT token kullandım. Admin
                Panel oluşturdum. Kullanıcıların mağaza açabilmesi için başvuru
                paneli oluşturdum. Mağaza sahiplerinin, ürün ekleme, silme ve
                güncelleme işlemleri yapabileceği platform oluşturdum. Material
                UI, ReactStrap ve ReactBootstrap kütüphanelerini kullandım.
              </p>
              <h4 className="aboutTitles">TECRÜBELER</h4>
              <div className="grid-container-2">
                <div className="grid-item item1">
                  <span>(Staj)</span> 2015/2016
                </div>
                <div className="grid-item item2">
                  SMMM TURGAY ERDAL KIRAL Serbest Mali Müşavir Bağımsız Denetçi{" "}
                </div>
                <div className="grid-item item3">(Aydın/Didim) 2015/2017</div>
                <div className="grid-item item4">A101 (Yaz Aylarında)</div>
                <div className="grid-item item5">(Aydın/Didim) 2018/2021</div>
                <div className="grid-item item6">
                  {" "}
                  Damaca Tüp Bayisi (Yaz Aylarında){" "}
                </div>
                <div className="grid-item item7"> DENİZli (2 Ay)</div>
                <div className="grid-item item8">
                  PROXOLAB (KURSİYER) WEB DEVELOPER
                </div>
                <div className="grid-item item9"> ANKARA 2022 (2 Ay)</div>
                <div className="grid-item item10">
                  CAMPUSONLİNE (Backend DEVELOPER)
                </div>
              </div>
              <h4 className="aboutTitles">PROGRAMLAR</h4>
              <div className="grid-container-2">
                <div className="grid-item levelbox1">JAVASCRİPT</div>
                <div className="grid-item levelbox2">
                  <div id="levelBox" className="col-2"></div>
                  <div id="levelBox" className="col-2"></div>
                  <div id="levelBox" className="col-2"></div>
                  <div id="levelBoxBos" className="col-2"></div>
                </div>
                <div className="grid-item levelbox3">HTML/CSS</div>

                <div className="grid-item levelbox4">
                  {" "}
                  <div id="levelBox" className="col-2"></div>
                  <div id="levelBox" className="col-2"></div>
                  <div id="levelBox" className="col-2"></div>
                  <div id="levelBoxBos" className="col-2"></div>{" "}
                </div>
                <div className="grid-item levelbox5">REACT</div>
                <div className="grid-item levelbox6">
                  <div id="levelBox" className="col-2"></div>
                  <div id="levelBox" className="col-2"></div>
                  <div id="levelBox" className="col-2"></div>
                  <div id="levelBoxBos" className="col-2"></div>{" "}
                </div>
                <div className="grid-item levelbox7"> PHP/LARAVEL </div>
                <div className="grid-item levelbox8">
                  {" "}
                  <div id="levelBox" className="col-2"></div>
                  <div id="levelBox" className="col-2"></div>
                  <div id="levelBox" className="col-2"></div>
                  <div id="levelBoxBos" className="col-2"></div>
                </div>
                <div className="grid-item levelbox9">İLERİ EXCEL </div>
                <div className="grid-item levelbox10">
                  <div id="levelBox" className="col-2"></div>
                  <div id="levelBox" className="col-2"></div>
                  <div id="levelBox" className="col-2"></div>
                  <div id="levelBox" className="col-2"></div>{" "}
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default About;
