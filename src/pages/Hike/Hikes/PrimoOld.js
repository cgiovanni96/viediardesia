import React from "react";
import styled from "styled-components";
import Image from "../../../components/Helpers/Image";

const Primo = () => {
  return (
    <Base>
      <Title> Itinerario 1: Santa Giulia - Colla </Title>
      <Info>
        <InfoLeft>
          <InfoTitle>Info</InfoTitle>
          <InfoDetails>
            <DetailsEl>Durata: 1h</DetailsEl>
            <DetailsEl>Dislivello: 405m</DetailsEl>
            <DetailsEl>Lunghezza: 3km</DetailsEl>
          </InfoDetails>
          <InfoText>
            Classico itinerario di salita con percorso sul crinale sommitale. Il
            sentiero è segnalato dalla F.I.E. con simbolo “bollino rosso su
            sfondo bianco”. Partendo da S.Giulia, “balcone” naturale sul Golfo
            del Tigullio. Si prosegue la salita per vecchi sentieri lastricati e
            antiche “crose” quindi si giunge alla Colla. Punto identificato come
            centrale della rete sentieristica. Durante l’itinerario s’incontrano
            referti rurali interessati e alcune cappelle votive dedicate alla
            Santa.
          </InfoText>
        </InfoLeft>
        <InfoRight>
          <Image src={"./hikes/percorso1/mappa-1.png"} />
        </InfoRight>
      </Info>

      <Cover>
        <Image src={"./hikes/percorso1/cover-1.png"} />
        <Caption>Vista panoramica dalla terrazza di Santa Giulia</Caption>
      </Cover>

      <Text>
        L’elevato valore panoramico, uno dei più suggestivi della Riviera di
        Levante e della Liguria stessa, con viste aperte su tutto il golfo del
        Tigullio con visuale del Promontorio di Portofino (a sinistra) e Baia
        delle Favole (a destra) e oltre: nelle giornate limpide è possibile
        vedere l’isola di Corsica verso Sud e parte dell’arcipelago toscano con
        Gorgona a Est e Capraia a Sud-Est. A Ovest la vista spazia sulla costa
        ligure di Ponente e sulle Alpi Marittime, d’inverno con le cime innevate
        dei monti Saccarello e Frontè.
      </Text>

      <MidSection>
        <Column>
          <Text>
            Santa Giulia Centaura è la località più antica ed è rinomata per la
            posizione che domina tutto il Golfo del Tigullio, ammirabile dal
            piazzale della Chiesa (l’attuale edificio risale al 1600, ma è
            probabilmente costruito sull’antica cappella). Di particolare pregio
            il pavimento a risseu (rissolato), mosaico di sassi marini
            policromi, del piazzale della Chiesa. Il nome Centaura deriva da
            Centuri, località del Capo Corso, dove una giovane cristiana di nome
            Giulia fu martirizzata e crocifissa. La leggenda racconta che le
            spoglie giunsero sulla spiaggia e furono conservate come reliquie
            nella Chiesa fino all’VIII secolo, quando furono trasportate nel
            noto monastero di Brescia a Lei dedicato. La tradizione religiosa si
            è mantenuta fino a un secolo fa, con il rito dei ceri illuminati che
            erano posti in mare sia a Cavi sia a Centuri e che le correnti
            marine trasportano sulle rispettive rive. Nell’XI secolo Santa
            Giulia apparteneva all’Arcivescovo di Genova, poi passò sotto il
            controllo dei Signori locali. La rete di sentieri qui percorribili è
            fitta e compete in bellezza con altri celebri percorsi liguri.
            Crocetta si trova sul crinale alle spalle della chiesa di Santa
            Giulia, da qui raggiungibile con un panoramico sentiero. Il toponimo
            indica l’antica presenza una croce da rogazione nel luogo dove si
            recavano le processioni, ma anche l’incrocio dei sentieri di crinale
            con quelli provenienti da Lavagna e da Cavi.
          </Text>

          <Paginated>
            <PaginatedLeft>
              <Image src={"./hikes/percorso1/restauro-1.png"} />
              <Text>
                Leccio Monumentale (Quercus Ilex) Il suo nome dialettale è
                "Eisgiu". Si tratta di un esemplare isolato radicato nel
                piazzale della Chiesa parrocchiale di S.Giulia. La circonferenza
                e' di Mt 4,50, il portamento espanso e l'eta' e' stimata intorno
                ai 360 anni circa. Alto 11 metri rientra nell'elenco degli
                alberi monumentali della Regione Liguria e la sua presenza è
                documentata nell'archivio parrocchiale già nel XVII secolo.
              </Text>
            </PaginatedLeft>

            <PaginatedRight>
              <Image src={"./hikes/percorso1/leccio-1.png"} />
              <Caption>Il Leccio Monumentale di santa Giulia</Caption>
            </PaginatedRight>
          </Paginated>
        </Column>

        <Column>
          <Image src={"./hikes/percorso1/chiesa-1.png"} />
          <Caption>
            Panorama alle spalle della chiesa in direzione ovest, s'intravedono
            i monti innevati Saccarello e Frontè
          </Caption>
          <Paginated>
            <PaginatedLeft>
              <Text>
                Durante il percorso, a testimonianza della devozione alla santa
                troviamo varie edicole votive di estrema bellezza e antichità,
                oltre a un conglomerato di case rurali poco prima dell'arrivo
                alla Colla, probabilmnete seccatoi di castagne e case contadine.
              </Text>

              <Image src={"./hikes/percorso1/edicola-1.png"} />
              <Caption>
                Due edicole votive dedicate alla Santa, a destra in cima alla
                Colla, a sinistra subito prima della cima
              </Caption>
            </PaginatedLeft>

            <PaginatedRight>
              <Image src={"./hikes/percorso1/edicola-2.png"} />
            </PaginatedRight>
          </Paginated>
        </Column>
      </MidSection>
    </Base>
  );
};

export default Primo;

const Base = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme.typo.family.secondary};
  font-size: 18px;

  & > * {
    margin-top: 3rem;
  }
`;

const Title = styled.h1`
  font-size: 4rem;
  text-align: center;
  font-family: ${({ theme }) => theme.typo.family.main};
`;

const Info = styled.div`
  display: flex;
`;

const InfoTitle = styled.h2`
  margin: 0 auto;
  font-size: 3rem;
  margin-bottom: 1rem;
  font-family: ${({ theme }) => theme.typo.family.main};
`;

const InfoDetails = styled.ul`
  margin: 0 auto;
  margin-bottom: 2rem;
  font-family: ${({ theme }) => theme.typo.family.main};
`;

const DetailsEl = styled.li`
  font-size: 1.3rem;
`;

const InfoLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoRight = styled.div``;

const InfoText = styled.p`
  margin: 0 20%;
  line-height: 1.4rem;
`;

const Cover = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Caption = styled.span`
  margin-top: 1rem;
  text-align: center;
  font-size: 0.9rem;
`;

const Text = styled.div`
  margin: 1rem 0;
  text-align: justify;
  line-height: 1.4rem;
`;

const MidSection = styled.section`
  display: flex;

  & > :first-child {
    margin-right: 2rem;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Paginated = styled.div`
  display: flex;
  margin-top: 2rem;
`;

const PaginatedLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PaginatedRight = styled.div`
  margin-left: 1.5rem;
`;
