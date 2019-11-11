//1 megirom a komponenseket, App.js-ben Provider store={store}
//2 a komponensben megirom az actiont pl button onClick={increase}, increase az action
//3 const mapDispatchToProps={increase}
//4 const mapStateToProps = (store) => { counter: store.counter}, itt a mar modified store-bol nyerunk ki adatot, varjuk vissza a countert
//5 export default connect(mapStateToProps,mapDispatchToProps)(komponens neve), ezzel kotom ossze a componensemet a store-ral
//6 actiont lekodoljuk, ennek a type-jara hallgatozik a reducer
  // action creator functionoket irunk, az action az maga az object amit visszaad
  // (vagy kesobb a saga, ha mar be van kotve a backend)
  // type INCREASE, ezt innen a payloadban kuldom tovabb (lehet payload is)
  // itt parameterkent tudjuk befogadni azt az adatot, amit a this.props.actionNeve-vel tovabbkuldtunk a componensbol
  // ha kapunk adatot a componensbol, a payloaddal tovabbitjuk: (pl regisztraciokoz az inputfieldekbe irt adatok)
//7 lekodolom a reducert (switch case), aminek a state-jeben van az adat