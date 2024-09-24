// IMAGES

const Bio = () => {
  const styles = {
    background: "bg-accent/50 px-6 py-12 h-full",
    title: "font-bold text-black font-serif text-7xl pb-8",
    serviceContainer: "flex flex-1 flex-col",
    container: "my-8 flex flex-col",
    serviceTitle:
      "font-bold text-black font-serif text-2xl text-center pt-4 underline decoration-dashed",
    contactInfo: "text-center pb-6",
    button:
      "text-white font-serif text-lg tracking-wider bg-black outline outline-offset-2 outline-black px-12 py-2 rounded-full hover:bg-button hover:outline-none",
  };

  return (
    <div id="bio" className={styles.background}>
      <h1 className={styles.title}>BIOGRAPHY</h1>
      <p className="text-base">
        Paul Feehan is a versatile musician, working as a pianist, accompanist,
        conductor, teacher, composer and arranger.
        <br /> <br />
        Paul was born in Wigan and studied piano initially at Huddersfield
        University, where he received the Peabody Homes Prize for all-round
        attainment, and the Kruzynski Prize for Piano. He went on to study at
        the Royal Northern College of Music with David Lloyd. <br /> <br />{" "}
        Whilst at the RNCM, he passed the Postgraduate Diploma for Advanced
        Studies in Musical Performance and the Professional Performer’s Diploma.
        Prizes awarded included: The Saville-Holmes Lieder Prize for
        Accompaniment, The John Ireland Prize for Accompaniment, The RJ Forbes
        Price (twice). <br /> <br />
      </p>

      {/* IMAGE GALLERY 01 */}

      <p>
        He participated on numerous occasions in the prestigious Principal’s
        Senior Recital series. After leaving the RNCM, Paul continued his
        studies with Martin Roscoe and Ryzard Bakst. <br /> <br />
        He has performed throughout the country and abroad (France, Spain,
        Austria, Czechoslovakia, and Ireland) as soloist, accompanist, conductor
        and concerto soloist. He has accompanied many distinguished soloists
        including cellists Alexander Baillie, Tim Lowe, Natalie Clein (BBC &
        European Young Musician of the Year) and Anna Douglass (winner of the
        Brass Class at the BBC Young Musician of the Year 2010). <br /> <br />
      </p>

      <p>
        In December 2012, Paul was the recipient of a national composition
        award, where the judges were John Rutter, Stephen Cleobury (Director of
        King’s College Choir, Cambridge) and David Hurley (of the King’s
        Singers), for his a-cappella SATB composition ‘Sir Christèmas’. <br />{" "}
        <br />
        {/* IMAGE GALLERY 02 */}
        He worked regularly with Yorkshire Youth Choir, where his compositions
        and arrangements are regularly used, and in 2013 with TIm Lowe
        co-founded the York Chamber Music Festival, which has attracted some of
        the country’s most prestigious performers including Martin Roscoe and
        Jennifer Pike. <br /> <br />
        In 2014, to commemorate the centenary of the start of World War I, Paul
        composed a requiem entitled ‘Deeds of Angels’, which was very well
        received.
      </p>
    </div>
  );
};

export default Bio;
