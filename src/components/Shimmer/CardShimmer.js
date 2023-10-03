import React from 'react'

const CardShimmer = () => {
  return (
    <div>
        <div>
      <h1 className="text-white font-bold  text-xl sm:text-3xl ml-4 sm:ml-14 pt-4 px-1  ">
        {" "}
        Movies{" "}
      </h1>
      <Poster
        title={original_title}
        poster={backdrop_path}
        average={vote_average}
        details={overview}
        id={id}
      />

      <h1 className="text-white text-6xl font-bold m-4 p-2 ml-7 mt-6 mb-5">
        Movies
      </h1>
      <h1 className="text-white ml-11 text-2xl font-bold mb-1">
        Trending Movies
      </h1>
      <div className="flex overflow-x-scroll px-8 ">
        <div className="flex ">
          {movieDetails.results.map((movie) => {
            return (
              <MovieCards movieData={movie} store="trendingMovieDetails" />
            );
          })}
        </div>
      </div>
    </div>
    </div>
  )
}

export default CardShimmer