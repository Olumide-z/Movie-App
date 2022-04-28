import React from "react";
import moment from "moment";
import { useGlobalContext } from "../../context";

import {
  Container,
  Wrapper,
  LargeImgWrapper,
  LargeImg,
  SmallImgWrapper,
  SmallImg,
  Title,
  Span,
  Genre,
  GenList,
  GenName,
  Overview,
  OverviewHeading,
  OverviewInfo,
  ReleaseDate,
  Rating,
  Info,
  Star,
  Season,
  SeasonTitle,
  SeasonInfo,
} from "./MovieDetailsStyles";

const MovieDetails = ({ content }) => {
  // let storedMovie = watchlist.find(t => t.id === id);
  // const watchlistDisable = storedMovie ? true : false

  return (
    <Container>
      {content && (
        <Wrapper>
          <LargeImgWrapper>
            <LargeImg
              src={`https://image.tmdb.org/t/p/original${content.backdrop_path}`}
              alt={content.title}
            />
            <div className="div"></div>
          </LargeImgWrapper>
          <SmallImgWrapper>
            <SmallImg
              src={`https://image.tmdb.org/t/p/original${content.poster_path}`}
              alt={content.title}
            />
          </SmallImgWrapper>
          <Info>
            <Title>{content.title || content.name}</Title>
            <Span>{content.tagline}</Span>
            <Genre>Genres</Genre>
            <GenList>
              {content.genres.map((genre) => {
                const { id, name } = genre;
                return <GenName key={id}>{name}</GenName>;
              })}
            </GenList>
            <Overview>
              <OverviewHeading>OVERVIEW</OverviewHeading>
              <OverviewInfo>{content.overview}</OverviewInfo>
            </Overview>
            {content.number_of_seasons && (
              <Season>
                <SeasonTitle>NUMBER OF SEASONS</SeasonTitle>
                <SeasonInfo>{content.number_of_seasons}</SeasonInfo>
              </Season>
            )}

            <ReleaseDate>
              <h3>RELEASE DATE </h3>
              <p>
                {moment(content.release_date || content.first_air_date).format(
                  "ll"
                )}
              </p>
            </ReleaseDate>
            <Rating>
              <h3>RATING</h3>
              <p>
                {content.vote_average}
                <Star />
              </p>
            </Rating>
          </Info>
        </Wrapper>
      )}
    </Container>
  );
};

export default MovieDetails;
