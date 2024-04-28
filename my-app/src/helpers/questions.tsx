const words = [
  {
    english: "ought",
    portuguese: "dever",
    question: "It means 'should' or 'must.'",
    audio: "ought.mp3",
  },
  {
    english: "grieve",
    portuguese: "lamentar",
    question: "It means 'to feel deep sadness or sorrow.'",
    audio: "grieve.mp3",
  },
  {
    english: "sauntered",
    portuguese: "passear",
    question: "It means 'to walk leisurely or casually.'",
    audio: "sauntered.mp3",
  },
  {
    english: "eyelet lace",
    portuguese: "renda de ilhós",
    question:
      "What is the meaning of this phrase? It refers to a type of fabric or trim with small holes or perforations.",
    audio: "eyelet_lace.mp3",
  },
  {
    english: "blistering",
    portuguese: "abrasador",
    question: "It means 'very hot or scorching.'",
    audio: "blistering.mp3",
  },
  {
    english: "sprawling",
    portuguese: "espalhado",
    question:
      "It means 'extending over a large area in an irregular or untidy manner.'",
    audio: "sprawling.mp3",
  },
  {
    english: "urged",
    portuguese: "instigado",
    question:
      "It means 'to strongly encourage or persuade someone to do something.'",
    audio: "urged.mp3",
  },
  {
    english: "genuinely",
    portuguese: "verdadeiramente",
    question: "It means 'truly' or 'sincerely.'",
    audio: "genuinely.mp3",
  },
  {
    english: "verbose",
    portuguese: "prolixo",
    question: "It means 'using more words than necessary' or 'wordy.'",
    audio: "verbose.mp3",
  },
  {
    english: "stumbled",
    portuguese: "tropeçou",
    question:
      "It means 'to trip or lose one's balance while walking or running.'",
    audio: "stumbled.mp3",
  },
  {
    english: "steadied",
    portuguese: "estabilizado",
    question: "It means 'to make or become steady or stable.'",
    audio: "steadied.mp3",
  },
  {
    english: "strapped",
    portuguese: "amarrado",
    question: "It means 'tightly secured or fastened with straps or belts.'",
    audio: "strapped.mp3",
  },
  {
    english: "resources",
    portuguese: "recursos",
    question:
      "It refers to 'available assets or materials that can be used or drawn upon.'",
    audio: "resources.mp3",
  },
  {
    english: "prompted",
    portuguese: "solicitado",
    question: "It means 'to motivate or induce someone to take action.'",
    audio: "prompted.mp3",
  },
  {
    english: "sheepishly",
    portuguese: "envergonhado",
    question: "It means 'in a shy or embarrassed manner.'",
    audio: "sheepishly.mp3",
  },
  {
    english: "mechanic",
    portuguese: "mecânico",
    question:
      "It refers to a person who repairs or maintains machinery or vehicles.",
    audio: "mechanic.mp3",
  },
  {
    english: "compromise",
    portuguese: "compromisso",
    question:
      "It means 'an agreement orsettlement reached by mutual concessions.'",
    audio: "compromise.mp3",
  },
  {
    english: "peeked sideways",
    portuguese: "olhou de lado",
    question:
      "What is the meaning of this phrase? It means 'to glance or look quickly to the side.'",
    audio: "peeked_sideways.mp3",
  },
  {
    english: "moss",
    portuguese: "musgo",
    question:
      "It refers to a small, soft, non-vascular plant that typically grows in damp or shady locations.",
    audio: "moss.mp3",
  },
  {
    english: "canopy",
    portuguese: "dossel",
    question:
      "It refers to an overhead covering or shelter, typically formed by the branches and leaves of trees.",
    audio: "canopy.mp3",
  },
  {
    english: "ferns",
    portuguese: "samambaias",
    question:
      "It refers to a group of non-flowering vascular plants that reproduce via spores.",
    audio: "ferns.mp3",
  },
  {
    english: "filtered",
    portuguese: "filtrado",
    question: "It means 'to pass through a filter to remove impurities.'",
    audio: "filtered.mp3",
  },
  {
    english: "dwell",
    portuguese: "habitar",
    question: "It means 'to live or reside in a particular place.'",
    audio: "dwell.mp3",
  },
  {
    english: "dejectedly",
    portuguese: "desanimadamente",
    question: "It means 'in a sad or depressed manner.'",
    audio: "dejectedly.mp3",
  },
  {
    english: "sheeting",
    portuguese: "lâmina",
    question:
      "It refers to a large, thin piece of material such as fabric or metal.",
    audio: "sheeting.mp3",
  },
  {
    english: "toddlers",
    portuguese: "crianças pequenas",
    question:
      "It refers to young children who are just beginning to walk and explore their surroundings.",
    audio: "toddlers.mp3",
  },
  {
    english: "despite",
    portuguese: "apesar de",
    question:
      "It means 'in spite of' or 'without being affected by something.'",
    audio: "despite.mp3",
  },
  {
    english: "slender",
    portuguese: "esguio",
    question: "It means 'thin in an attractive or elegant way.'",
    audio: "slender.mp3",
  },
  {
    english: "obviously",
    portuguese: "obviamente",
    question: "It means 'in a way that is easily perceived or understood.'",
    audio: "obviously.mp3",
  },
  {
    english: "harming",
    portuguese: "prejudicando",
    question:
      "It refers to causing damage, injury, or distress to someone or something.",
    audio: "harming.mp3",
  },
  {
    english: "communal",
    portuguese: "comunitário",
    question:
      "It means 'shared by all members of a community' or 'relating to a community.'",
    audio: "communal.mp3",
  },
  {
    english: "tangled",
    portuguese: "emaranhado",
    question: "It means 'twisted together in a messy or confused way.'",
    audio: "tangled.mp3",
  },
  {
    english: "damp",
    portuguese: "úmido",
    question: "It means 'slightly wet or moist.'",
    audio: "damp.mp3",
  },

  {
    english: "sallower",
    portuguese: "mais pálido",
    question: "It means 'having a paler complexion than usual.'",
    audio: "sallower.mp3",
  },
  {
    english: "mattered",
    portuguese: "importou",
    question: "It means 'to be of importance or significance.'",
    audio: "mattered.mp3",
  },
  {
    english: "whooshing",
    portuguese: "assovio",
    question:
      "It refers to a sound or movement that goes quickly with a rushing or blowing sound.",
    audio: "whooshing.mp3",
  },
  {
    english: "quilt",
    portuguese: "colcha",
    question:
      "It refers to a bed covering made of padding enclosed between layers of fabric and kept in place by lines of stitching.",
    audio: "quilt.mp3",
  },
  {
    english: "pulled",
    portuguese: "puxado",
    question:
      "It means 'to exert force on something in order to move it toward oneself or the origin of the force.'",
    audio: "pulled.mp3",
  },
  {
    english: "pillow",
    portuguese: "travesseiro",
    question:
      "It refers to a rectangular cushion used to support the head while sleeping.",
    audio: "pillow.mp3",
  },

  {
    english: "drizzle",
    portuguese: "chuvisco",
    question:
      "It refers to light rain falling in fine, almost invisible drops.",
    audio: "drizzle.mp3",
  },
  {
    english: "linoleum",
    portuguese: "linóleo",
    question:
      "It is a type of floor covering made from solidified linseed oil, pine rosin, ground cork dust, and pigments on a canvas backing.",
    audio: "linoleum.mp3",
  },
  {
    english: "adjoining",
    portuguese: "vizinho",
    question: "It means 'next to' or 'connected to.'",
    audio: "adjoining.mp3",
  },
  {
    english: "handkerchief",
    portuguese: "lenço de bolso",
    question:
      "It is a small square of fabric used for wiping one's nose or face.",
    audio: "handkerchief.mp3",
  },
  {
    english: "procession",
    portuguese: "procissão",
    question:
      "It refers to a number of people or vehicles moving forward in an orderly fashion, especially as part of a ceremony or festival.",
    audio: "procession.mp3",
  },
  {
    english: "swirled",
    portuguese: "girou",
    question:
      "It means 'to move or cause to move in a twisting or spiraling pattern.'",
    audio: "swirled.mp3",
  },
  {
    english: "roaring",
    portuguese: "rugindo",
    question:
      "It refers to a loud, deep, and prolonged sound, typically produced by a lion or other large wild animal.",
    audio: "roaring.mp3",
  },
  {
    english: "idling",
    portuguese: "ocioso",
    question: "It means 'spending time doing nothing; not working or active.'",
    audio: "idling.mp3",
  },
  {
    english: "bound",
    portuguese: "amarrado",
    question: "It means 'tied or fastened with a rope or cord.'",
    audio: "bound.mp3",
  },
  {
    english: "marron-colored bricks",
    portuguese: "tijolos cor de marrom",
    question:
      "What is the meaning of this phrase? It refers to bricks that are colored in a shade of brown.",
    audio: "maroon-colored_bricks.mp3",
  },
  {
    english: "shrubs",
    portuguese: "arbustos",
    question:
      "It refers to small to medium-sized woody plants that have multiple stems and are shorter than trees.",
    audio: "shrubs.mp3",
  },
  {
    english: "stepped",
    portuguese: "pisou",
    question:
      "It means 'to lift and set down one's foot or one foot after the other in order to walk, move, or stand.'",
    audio: "stepped.mp3",
  },
  {
    english: "unwillingly",
    portuguese: "a contragosto",
    question:
      "It means 'in a reluctant or hesitant manner; without wanting to.'",
    audio: "unwillingly.mp3",
  },
  {
    english: "hedges",
    portuguese: "sebes",
    question:
      "It refers to a fence or boundary formed by closely growing bushes or shrubs.",
    audio: "hedges.mp3",
  },

  {
    english: "padded",
    portuguese: "acolchoado",
    question:
      "It means 'covered, filled, or lined with a soft material to protect or give comfort.'",
    audio: "padded.mp3",
  },
  {
    english: "cluttering",
    portuguese: "acumulando",
    question:
      "It refers to the act of filling or covering a space with an untidy collection of objects, creating a mess or disorder.",
    audio: "cluttering.mp3",
  },
  {
    english: "cluttered",
    portuguese: "bagunçado",
    question:
      "It describes a space or area that is messy, disorganized, or filled with a lot of things.",
    audio: "cluttered.mp3",
  },
  {
    english: "immediate",
    portuguese: "imediato",
    question: "It means 'occurring or done at once; instant or without delay.'",
    audio: "immediate.mp3",
  },
  {
    english: "stuffed",
    portuguese: "recheado",
    question: "It means 'filled tightly or packed with something.'",
    audio: "stuffed.mp3",
  },
  {
    english: "slung",
    portuguese: "arremessado",
    question: "It means 'thrown, flung, or hung loosely.'",
    audio: "slung.mp3",
  },

  {
    english: "feebly",
    portuguese: "fracamente",
    question: "It means 'in a weak or feeble manner.'",
    audio: "feebly.mp3",
  },
  {
    english: "hyperventilation",
    portuguese: "hiperventilação",
    question:
      "It refers to a condition characterized by rapid and deep breathing, often caused by anxiety or panic.",
    audio: "hyperventilation.mp3",
  },
  {
    english: "raincoats",
    portuguese: "capas de chuva",
    question: "It refers to waterproof coats worn to protect against rain.",
    audio: "raincoats.mp3",
  },
  {
    english: "hooks",
    portuguese: "ganchos",
    question:
      "It refers to curved or bent devices used for hanging or holding things.",
    audio: "hooks.mp3",
  },
  {
    english: "balding",
    portuguese: "ficando careca",
    question:
      "It describes a person who is experiencing hair loss or thinning hair, especially on the head.",
    audio: "balding.mp3",
  },
  {
    english: "gawked",
    portuguese: "olhou fixamente",
    question: "It means 'to stare openly and stupidly.'",
    audio: "gawked.mp3",
  },
  {
    english: "droned on",
    portuguese: "falou continuamente",
    question:
      "What is the meaning of this phrase? It means 'to talk continuously and monotonously, often in a dull or boring manner.'",
    audio: "droned_on.mp3",
  },
  {
    english: "gangly",
    portuguese: "desajeitado",
    question:
      "It describes a person, especially tall and thin, who moves or stands awkwardly.",
    audio: "gangly.mp3",
  },
  {
    english: "aisle",
    portuguese: "corredor",
    question:
      "It refers to a passageway between rows of seats, shelves, or other objects.",
    audio: "aisle.mp3",
  },
  {
    english: "tentatively",
    portuguese: "tentativamente",
    question: "It means 'in a hesitant or uncertain manner.'",
    audio: "tentatively.mp3",
  },
  {
    english: "sighed",
    portuguese: "suspirou",
    question:
      "It refers to the act of emitting a long, deep breath as an expression of relief, exhaustion, or frustration.",
    audio: "sighed.mp3",
  },
  {
    english: "stammered",
    portuguese: "gaguejou",
    question:
      "It means 'to speak with involuntary pauses or repetitions of sounds, often due to nervousness or speech impediment.'",
    audio: "stammered.mp3",
  },
  {
    english: "blushed",
    portuguese: "corou",
    question:
      "It refers to the reddening of the face, typically caused by embarrassment, shyness, or modesty.",
    audio: "blushed.mp3",
  },
  {
    english: "tripped",
    portuguese: "tropeçou",
    question:
      "It means 'to catch one's foot on something and stumble or fall.'",
    audio: "tripped.mp3",
  },
  {
    english: "nodded",
    portuguese: "acenou com a cabeça",
    question:
      "It means 'to move the head up and down as a way of showing agreement, understanding, or acknowledgment.'",
    audio: "nodded.mp3",
  },

  {
    english: "prattled",
    portuguese: "tagarelou",
    question:
      "It means 'to talk at length in a foolish or inconsequential way.'",
    audio: "prattled.mp3",
  },
  {
    english: "lanky",
    portuguese: "esguio",
    question:
      "It describes a person who is tall, thin, and having an awkwardly thin or loose build.",
    audio: "lanky.mp3",
  },
  {
    english: "untidy",
    portuguese: "desarrumado",
    question: "It means 'not neat or organized; messy or disheveled.'",
    audio: "untidy.mp3",
  },
  {
    english: "statuesque",
    portuguese: "estátua",
    question:
      "It describes a person who is tall, graceful, and well-proportioned, like a statue.",
    audio: "statuesque.mp3",
  },
  {
    english: "chalky",
    portuguese: "calcário",
    question:
      "It means 'resembling or containing chalk; having a white, powdery texture or appearance.'",
    audio: "chalky.mp3",
  },

  {
    english: "palest",
    portuguese: "pálido",
    question:
      "It means 'having a light or washed-out color; lacking intensity or brightness.'",
    audio: "palest.mp3",
  },
  {
    english: "albino",
    portuguese: "albino",
    question:
      "It refers to a person or animal with a congenital absence of pigmentation, resulting in a pale or white appearance.",
    audio: "albino.mp3",
  },
  {
    english: "bruise",
    portuguese: "hematoma",
    question:
      "It is a noun that describes a discoloration of the skin caused by a rupture of underlying blood vessels, usually due to injury.",
    audio: "bruise.mp3",
  },
  {
    english: "tray",
    portuguese: "bandeja",
    question:
      "It is a noun that refers to a flat, shallow container used for holding or serving food, drinks, or other items.",
    audio: "tray.mp3",
  },
  {
    english: "lope",
    portuguese: "galope",
    question:
      "It is a verb that means 'to run or move with a long bounding stride, often in a relaxed or leisurely manner.'",
    audio: "lope.mp3",
  },
  {
    english: "lithe",
    portuguese: "flexível",
    question:
      "It describes a person or their body as thin, supple, and graceful in movement.",
    audio: "lithe.mp3",
  },
  {
    english: "glided",
    portuguese: "deslizou",
    question:
      "It is a past tense verb that means 'to move smoothly, silently, or effortlessly.'",
    audio: "glided.mp3",
  },
  {
    english: "darted",
    portuguese: "disparou",
    question:
      "It is a past tense verb that means 'to move suddenly and quickly in a particular direction.'",
    audio: "darted.mp3",
  },
  {
    english: "swiftly",
    portuguese: "rapidamente",
    question: "It means 'quickly or speedily; with great swiftness.'",
    audio: "swiftly.mp3",
  },
  {
    english: "reddish",
    portuguese: "avermelhado",
    question:
      "It describes something that has a reddish or somewhat red color.",
    audio: "reddish.mp3",
  },
  {
    english: "sour grapes",
    portuguese: "uvas azedas",
    question:
      "What is the meaning of this phrase? It refers to the attitude of someone who disparages or belittles something they desire but cannot have.",
    audio: "sour_grapes.mp3",
  },
  {
    english: "sniffed",
    portuguese: "cheirou",
    question:
      "It is a past tense verb that means 'to draw in air audibly through the nose to detect a smell or perceive something.'",
    audio: "sniffed.mp3",
  },
  {
    english: "cheek",
    portuguese: "bochecha",
    question:
      "It refers to either side of the face below the eye and above the jaw.",
    audio: "cheek.mp3",
  },
  {
    english: "quaintances",
    portuguese: "conhecidos",
    question:
      "It is a combination of 'quaint' and 'acquaintances,' referring to people who are known but not close friends.",
    audio: "quaintances.mp3",
  },
  {
    english: "aisle",
    portuguese: "corredor",
    question:
      "It refers to a passageway between rows of seats, shelves, or other objects, typically in a church, theater, or supermarket.",
    audio: "aisle.mp3",
  },
  {
    english: "slip",
    portuguese: "escorregar",
    question:
      "It is a verb that means 'to slide unintentionally for a short distance; lose one's balance or footing.'",
    audio: "slip.mp3",
  },
  {
    english: "surgereptitiously",
    portuguese: "furtivamente",
    question:
      "It means 'in a way that attempts to avoid notice or attention; stealthily or secretly.'",
    audio: "surgereptitiously.mp3",
  },
  {
    english: "coal",
    portuguese: "carvão",
    question:
      "It refers to a black or dark-brown combustible mineral substance used as fuel, made primarily of carbon.",
    audio: "coal.mp3",
  },
  {
    english: "bewildered",
    portuguese: "perplexo",
    question:
      "It describes a person who is confused, puzzled, or uncertain about something.",
    audio: "bewildered.mp3",
  },
  {
    english: "antagonistic",
    portuguese: "antagonista",
    question:
      "It describes someone who is hostile, opposed, or showing active opposition or unfriendliness.",
    audio: "antagonistic.mp3",
  },
  {
    english: "averting",
    portuguese: "desviando",
    question:
      "It is a present participle verb that means 'to turn away or prevent from happening; avoid or ward off.'",
    audio: "averting.mp3",
  },
  {
    english: "clenched",
    portuguese: "cerrado",
    question:
      "It describes something that is firmly closed or tightly held together, usually referring to hands or fists.",
    audio: "clenched.mp3",
  },

  {
    english: "clenched",
    portuguese: "cerrado",
    question:
      "It describes something that is firmly closed or tightly held together, usually referring to hands or fists.",
    audio: "clenched.mp3",
  },
  {
    english: "sleeves",
    portuguese: "mangas",
    question: "It refers to the part of a garment that covers the arms.",
    audio: "sleeves.mp3",
  },
  {
    english: "elbows",
    portuguese: "cotovelos",
    question: "It refers to the joint between the forearm and the upper arm.",
    audio: "elbows.mp3",
  },
  {
    english: "forearm",
    portuguese: "antebraço",
    question:
      "It refers to the part of the arm extending from the elbow to the wrist.",
    audio: "forearm.mp3",
  },
  {
    english: "slight",
    portuguese: "ligeiro",
    question:
      "It describes something that is small in degree or extent; not considerable.",
    audio: "slight.mp3",
  },
  {
    english: "burly",
    portuguese: "robusto",
    question:
      "It describes someone who is strongly and heavily built; muscular and sturdy.",
    audio: "burly.mp3",
  },
  {
    english: "loosen",
    portuguese: "afrouxar",
    question:
      "It is a verb that means 'to make something less tight or firm; to relax or make less rigid.'",
    audio: "loosen.mp3",
  },
  {
    english: "bitterness",
    portuguese: "amargura",
    question:
      "It refers to the quality or state of being bitter, in taste, feeling, or character.",
    audio: "bitterness.mp3",
  },
  {
    english: "resentful",
    portuguese: "ressentido",
    question:
      "It describes someone who feels or shows bitterness or indignation at having been treated unfairly.",
    audio: "resentful.mp3",
  },

  {
    english: "blankly",
    portuguese: "fixamente",
    question:
      "It describes a stare or gaze that lacks expression or emotion; without understanding or comprehension.",
    audio: "blankly.mp3",
  },
  {
    english: "hardwired",
    portuguese: "pré-programado",
    question:
      "It refers to something that is inherently or instinctively programmed or connected.",
    audio: "hardwired.mp3",
  },
  {
    english: "tear ducts",
    portuguese: "ductos lacrimais",
    question:
      "What is the meaning of this phrase? It refers to the small tubes or channels in the eyes that carry tears from the glands to the nasal cavity.",
    audio: "tear_ducts.mp3",
  },
  {
    english: "gelled",
    portuguese: "gelado",
    question:
      "It describes something that has become firm, set, or solidified, often referring to a substance like hair gel.",
    audio: "gelled.mp3",
  },
  {
    english: "chatterer",
    portuguese: "tagarela",
    question:
      "It refers to someone who talks rapidly, incessantly, or in a trivial manner.",
    audio: "chatterer.mp3",
  },
  {
    english: "artlessly",
    portuguese: "ingenuamente",
    question:
      "It describes doing something in a natural, genuine, or innocent manner, often without guile or sophistication.",
    audio: "artlessly.mp3",
  },
  {
    english: "lingered",
    portuguese: "permaneceu",
    question:
      "It means to stay or remain in a place or situation for a longer time than necessary or expected.",
    audio: "lingered.mp3",
  },
  {
    english: "nauseated",
    portuguese: "enjoado",
    question:
      "It describes the feeling of extreme discomfort, queasiness, or sickness in the stomach, often leading to the urge to vomit.",
    audio: "nauseated.mp3",
  },
  {
    english: "tousled",
    portuguese: "desgrenhado",
    question:
      "It describes hair or other objects that are disordered, messy, or untidy in appearance.",
    audio: "tousled.mp3",
  },
  {
    english: "gist",
    portuguese: "essência",
    question:
      "It refers to the main or essential part of something; the central idea or essence.",
    audio: "gist.mp3",
  },
  {
    english: "sudden",
    portuguese: "repentino",
    question:
      "It describes something happening quickly and unexpectedly; abrupt or without warning.",
    audio: "sudden.mp3",
  },
  {
    english: "gusted",
    portuguese: "soprado",
    question:
      "It means to blow or rush out suddenly and strongly, often referring to wind or air.",
    audio: "gusted.mp3",
  },
  {
    english: "rustling",
    portuguese: "farfalhar",
    question:
      "It refers to a soft, light, and whispering sound or motion, often produced by the movement of leaves, paper, or fabric.",
    audio: "rustling.mp3",
  },
  {
    english: "swirling",
    portuguese: "redemoinhando",
    question:
      "It describes a twisting, rotating, or circular movement, often accompanied by a sense of fluidity or motion.",
    audio: "swirling.mp3",
  },

  {
    english: "merely",
    portuguese: "meramente",
    question:
      "It means 'only' or 'simply,' indicating that something is done or considered with little or no additional importance or significance.",
    audio: "merely.mp3",
  },
  {
    english: "stiffened",
    portuguese: "enrijeceu",
    question:
      "It describes the action of making something rigid, inflexible, or less pliant.",
    audio: "stiffened.mp3",
  },
  {
    english: "lasted",
    portuguese: "durou",
    question:
      "It means to continue or endure for a specific period or until completion.",
    audio: "lasted.mp3",
  },
  {
    english: "chilled",
    portuguese: "gelado",
    question:
      "It describes something that has been cooled or made cold, often referring to a decrease in temperature.",
    audio: "chilled.mp3",
  },
  {
    english: "hastily",
    portuguese: "apressadamente",
    question:
      "It describes doing something quickly, with excessive speed, or without taking sufficient time or care.",
    audio: "hastily.mp3",
  },
  {
    english: "thell",
    portuguese: "thell",
    question:
      "I'm sorry, but I couldn't find a translation or meaning for this word.",
    audio: "thell.mp3",
  },
  {
    english: "meekly",
    portuguese: "mansamente",
    question:
      "It describes doing something in a quiet, gentle, or submissive manner.",
    audio: "meekly.mp3",
  },
  {
    english: "haven",
    portuguese: "refúgio",
    question: "It refers to a place of safety, shelter, or refuge.",
    audio: "haven.mp3",
  },
  {
    english: "windshield",
    portuguese: "para-brisa",
    question:
      "It is the front window of a vehicle that protects the driver and passengers from wind and debris.",
    audio: "windshield.mp3",
  },
  {
    english: "heater",
    portuguese: "aquecedor",
    question:
      "It refers to a device or appliance that produces heat, often used for warming a room or providing hot water.",
    audio: "heater.mp3",
  },
  {
    english: "flattering",
    portuguese: "lisonjeiro",
    question:
      "It describes something that is complimentary or pleasing, often intended to make someone feel good about themselves.",
    audio: "flattering.mp3",
  },
  {
    english: "cringe out",
    portuguese: "sentir repulsa",
    question:
      "What is the meaning of this phrase? It means to recoil, feel disgusted, or experience strong aversion or embarrassment in response to something.",
    audio: "cringe_out.mp3",
  },
  {
    english: "dreading",
    portuguese: "temendo",
    question:
      "It describes the feeling of intense fear, anxiety, or apprehension about something anticipated or expected.",
    audio: "dreading.mp3",
  },
  {
    english: "lying",
    portuguese: "mentindo",
    question:
      "It refers to the act of intentionally giving false information or stating something that is not true.",
    audio: "lying.mp3",
  },
  {
    english: "siblings",
    portuguese: "irmãos",
    question:
      "It refers to brothers and sisters; individuals who have at least one parent in common.",
    audio: "siblings.mp3",
  },
  {
    english: "steered us",
    portuguese: "nos guiou",
    question:
      "What is the meaning of this phrase? It means to guide, direct, orcontrol the course or direction of a person or group.",
    audio: "steered_us.mp3",
  },
  {
    english: "elated",
    portuguese: "eufórico",
    question: "It describes a feeling of great joy, happiness, or excitement.",
    audio: "elated.mp3",
  },
  {
    english: "showed",
    portuguese: "mostrou",
    question: "It means to display, exhibit, or present something to others.",
    audio: "showed.mp3",
  },
  {
    english: "retriever",
    portuguese: "retriever",
    question:
      "It refers to a type of dog breed that is trained to fetch or retrieve objects.",
    audio: "retriever.mp3",
  },

  {
    english: "exhaled",
    portuguese: "exalou",
    question: "It means to breathe out or release air from the lungs.",
    audio: "exhaled.mp3",
  },
  {
    english: "wistfully",
    portuguese: "nostalgicamente",
    question:
      "It describes doing something with a feeling of longing, yearning, or melancholic desire.",
    audio: "wistfully.mp3",
  },
  {
    english: "perm",
    portuguese: "permanente",
    question:
      "It refers to a hairstyle achieved by using chemicals or heat to make the hair curly or wavy for an extended period of time.",
    audio: "perm.mp3",
  },
  {
    english: "tactful",
    portuguese: "hábil",
    question:
      "It describes someone who has the ability to communicate or handle situations in a considerate, sensitive, and diplomatic manner.",
    audio: "tactful.mp3",
  },
  {
    english: "absent",
    portuguese: "ausente",
    question:
      "It means not present or missing from a particular place or situation.",
    audio: "absent.mp3",
  },
  {
    english: "nagging",
    portuguese: "insistente",
    question:
      "It describes persistent, annoying, or irritating behavior of someone who keeps complaining or fault-finding.",
    audio: "nagging.mp3",
  },
  {
    english: "egotistical",
    portuguese: "egocêntrico",
    question:
      "It describes someone who is excessively self-centered, selfish, or focused on their own importance.",
    audio: "egotistical.mp3",
  },

  {
    english: "sweater",
    portuguese: "suéter",
    question:
      "It refers to a knitted garment worn on the upper body, typically with long sleeves, to provide warmth.",
    audio: "sweater.mp3",
  },
  {
    english: "swiftly",
    portuguese: "rapidamente",
    question:
      "It describes doing something quickly, promptly, or with great speed.",
    audio: "swiftly.mp3",
  },
  {
    english: "fleeing",
    portuguese: "fugindo",
    question:
      "It describes the act of running away or escaping from a dangerous, threatening, or undesirable situation.",
    audio: "fleeing.mp3",
  },
  {
    english: "fried",
    portuguese: "frito",
    question:
      "It refers to the process of cooking food in hot oil or fat, often resulting in a crispy and browned texture.",
    audio: "fried.mp3",
  },
  {
    english: "hand over",
    portuguese: "entregar",
    question:
      "What is the meaning of this phrase? It means to give, transfer, or surrender something to someone.",
    audio: "hand_over.mp3",
  },
  {
    english: "banquet hall",
    portuguese: "salão de banquetes",
    question:
      "What is the meaning of this phrase? It refers to a large room or hall used for hosting formal meals or celebratory gatherings.",
    audio: "banquet_hall.mp3",
  },
  {
    english: "gunned",
    portuguese: "disparou",
    question:
      "It describes the act of operating or firing a gun, typically with force or intensity.",
    audio: "gunned.mp3",
  },
  {
    english: "deafening",
    portuguese: "ensurdecedor",
    question:
      "It describes a sound that is extremely loud, overwhelming, or causing temporary or permanent hearing loss.",
    audio: "deafening.mp3",
  },
  {
    english: "backed",
    portuguese: "apoiado",
    question:
      "It means to provide support, assistance, or endorsement to someone or something.",
    audio: "backed.mp3",
  },
  {
    english: "earsplitting",
    portuguese: "estridente",
    question:
      "It describes a sound that is extremely loud, piercing, or causing great discomfort to the ears.",
    audio: "earsplitting.mp3",
  },
  {
    english: "subtly hinted",
    portuguese: "sugeriu sutilmente",
    question:
      "What is the meaning of this phrase? It means to indirectly or delicately suggest something without expressing it explicitly or directly.",
    audio: "subtly_hinted.mp3",
  },
  {
    english: "worn dishrags",
    portuguese: "panos de prato desgastados",
    question:
      "What is the meaning of this phrase? It refers to dishcloths or kitchen towels that have become old, frayed, or worn out due to use.",
    audio: "worn_dishrags.mp3",
  },
  {
    english: "acceptance",
    portuguese: "aceitação",
    question:
      "It refers to the act of willingly and positively receiving, embracing, or approving something or someone.",
    audio: "acceptance.mp3",
  },
  {
    english: "gladly",
    portuguese: "com prazer",
    question:
      "It describes doing something with joy, enthusiasm, or a willingness to do it willingly.",
    audio: "gladly.mp3",
  },
  {
    english: "stuffing",
    portuguese: "recheio",
    question:
      "It refers to a mixture of ingredients used to fill something, such as turkey, vegetables, or cushions.",
    audio: "stuffing.mp3",
  },
  {
    english: "foil",
    portuguese: "papel alumínio",
    question:
      "It refers to a thin, flexible metal sheet, often made of aluminum, used for wrapping, covering, or cooking food.",
    audio: "foil.mp3",
  },
  {
    english: "oven to bake",
    portuguese: "forno para assar",
    question:
      "What is the meaning of this phrase? It refers to a kitchen appliance or device used for heating and cooking food through baking.",
    audio: "oven_to_bake.mp3",
  },
  {
    english: "marinade",
    portuguese: "marinada",
    question:
      "It refers to a seasoned liquid mixture in which food, such as meat or vegetables, is soaked to enhance its flavor or tenderness.",
    audio: "marinade.mp3",
  },

  {
    english: "blouse",
    portuguese: "blusa",
    question:
      "It refers to a loose-fitting garment, typically worn by women, that covers the upper body and often has short sleeves.",
    audio: "blouse.mp3",
  },
  {
    english: "sighed",
    portuguese: "suspirou",
    question:
      "It describes the act of exhaling audibly to express tiredness, relief, frustration, or a deep emotion.",
    audio: "sighed.mp3",
  },
  {
    english: "rash",
    portuguese: "erupção",
    question:
      "It refers to an area of irritated or inflamed skin that may appear red, swollen, and itchy.",
    audio: "rash.mp3",
  },
  {
    english: "sturdy",
    portuguese: "robusto",
    question:
      "It describes something strong, well-built, or durable, capable of withstanding physical force or pressure.",
    audio: "sturdy.mp3",
  },
  {
    english: "broil",
    portuguese: "grelhar",
    question:
      "It refers to a cooking method that involves cooking food directly under high heat, typically in an oven or broiler.",
    audio: "broil.mp3",
  },
  {
    english: "hung up",
    portuguese: "desligou",
    question:
      "What is the meaning of this phrase? It means to end a phone call by putting the receiver down or disconnecting the call.",
    audio: "hung_up.mp3",
  },
  {
    english: "bustled",
    portuguese: "agitou-se",
    question:
      "It describes moving or acting in a busy, energetic, and purposeful manner.",
    audio: "bustled.mp3",
  },
  {
    english: "purpose",
    portuguese: "propósito",
    question:
      "It refers to the reason or intention behind an action, decision, or existence.",
    audio: "purpose.mp3",
  },
  {
    english: "warily",
    portuguese: "cautelosamente",
    question:
      "It describes doing something with caution, wariness, or a sense of being watchful and alert.",
    audio: "warily.mp3",
  },
  {
    english: "imaginative",
    portuguese: "imaginativo",
    question:
      "It describes someone or something that displays creativity, originality, or the ability to generate ideas.",
    audio: "imaginative.mp3",
  },
  {
    english: "experiments",
    portuguese: "experimentos",
    question:
      "It refers to systematic tests, studies, or investigations conducted to gain knowledge or validate a hypothesis.",
    audio: "experiments.mp3",
  },
  {
    english: "edible",
    portuguese: "comestível",
    question:
      "It describes something that is safe or suitable for consumption as food.",
    audio: "edible.mp3",
  },
  {
    english: "answered",
    portuguese: "respondeu",
    question:
      "It describes the act of replying or responding to a question, statement, or request.",
    audio: "answered.mp3",
  },
  {
    english: "lumbered",
    portuguese: "caminhou pesadamente",
    question: "It describes moving in a slow, heavy, or clumsy manner.",
    audio: "lumbered.mp3",
  },
  {
    english: "sniffed",
    portuguese: "cheirou",
    question:
      "It describes the act of inhaling or smelling something audibly, often to detect or identify a scent.",
    audio: "sniffed.mp3",
  },

  {
    english: "appreciatively",
    portuguese: "apreciativamente",
    question:
      "It describes doing something in a manner that shows gratitude, admiration, or enjoyment.",
    audio: "appreciatively.mp3",
  },
  {
    english: "suited",
    portuguese: "adequado",
    question:
      "It describes something that is appropriate, fitting, or well-matched for a particular purpose or situation.",
    audio: "suited.mp3",
  },
  {
    english: "outstanding",
    portuguese: "excepcional",
    question:
      "It describes something that is extremely good, excellent, remarkable, or noteworthy.",
    audio: "outstanding.mp3",
  },
  {
    english: "backpackers",
    portuguese: "mochileiros",
    question:
      "It refers to individuals who travel with their belongings in a backpack, often seeking budget-friendly or adventurous experiences.",
    audio: "backpackers.mp3",
  },
  {
    english: "hesitantly",
    portuguese: "hesitantemente",
    question:
      "It describes doing something with hesitation, uncertainty, or a lack of confidence.",
    audio: "hesitantly.mp3",
  },
  {
    english: "muttered",
    portuguese: "murmurou",
    question:
      "It describes speaking or uttering something in a low, indistinct, or grumbling voice.",
    audio: "muttered.mp3",
  },

  {
    english: "greeted",
    portuguese: "cumprimentado",
    question:
      "It describes the act of welcoming or acknowledging someone with a greeting.",
    audio: "greeted.mp3",
  },
  {
    english: "straightforward",
    portuguese: "direto",
    question:
      "It describes something that is clear, honest, and uncomplicated; easy to understand or follow.",
    audio: "straightforward.mp3",
  },
  {
    english: "swirling",
    portuguese: "girando",
    question:
      "It describes the motion of moving or spinning around in a circular or twisting pattern.",
    audio: "swirling.mp3",
  },
  {
    english: "cotton",
    portuguese: "algodão",
    question:
      "It refers to a soft, fibrous material derived from the cotton plant, often used for making textiles.",
    audio: "cotton.mp3",
  },
  {
    english: "fluffs",
    portuguese: "fofos",
    question:
      "It refers to something that is soft, light, and fluffy in texture or appearance.",
    audio: "fluffs.mp3",
  },
  {
    english: "swirling",
    portuguese: "girando",
    question:
      "It describes the motion of moving or spinning around in a circular or twisting pattern.",
    audio: "swirling.mp3",
  },
  {
    english: "erratically",
    portuguese: "de forma errática",
    question:
      "It describes doing something in an unpredictable, irregular, or inconsistent manner.",
    audio: "erratically.mp3",
  },
  {
    english: "q-tips",
    portuguese: "cotonetes",
    question:
      "It refers to small cotton swabs with a soft tip on each end, often used for cleaning delicate areas.",
    audio: "q-tips.mp3",
  },
  {
    english: "squishy",
    portuguese: "macio",
    question:
      "It describes something that is soft, spongy, and easily deformed when pressed.",
    audio: "squishy.mp3",
  },
  {
    english: "bent",
    portuguese: "curvado",
    question:
      "It describes something that is not straight and has a curve or angle.",
    audio: "bent.mp3",
  },
  {
    english: "retreating",
    portuguese: "retirando-se",
    question:
      "It describes the act of moving back or withdrawing from a previous position or direction.",
    audio: "retreating.mp3",
  },
  {
    english: "nodded",
    portuguese: "acenou com a cabeça",
    question:
      "It describes the action of moving the head up and down as a way of showing agreement, understanding, or acknowledgement.",
    audio: "nodded.mp3",
  },
  {
    english: "drier",
    portuguese: "secador",
    question:
      "It refers to a device or appliance used for removing moisture or drying something.",
    audio: "drier.mp3",
  },
  {
    english: "melted",
    portuguese: "derretido",
    question:
      "It describes something that has undergone a change from a solid state to a liquid state due to heating.",
    audio: "melted.mp3",
  },

  {
    english: "surgeon",
    portuguese: "cirurgião",
    question:
      "It refers to a medical doctor who specializes in performing surgical procedures.",
    audio: "surgeon.mp3",
  },
  {
    english: "backpedaled",
    portuguese: "recuou",
    question:
      "It describes the act of quickly reversing or retreating from a previous position or opinion.",
    audio: "backpedaled.mp3",
  },
  {
    english: "complimentary",
    portuguese: "com elogios",
    question:
      "It describes something that is given or expressed as a gesture of praise, admiration, or approval.",
    audio: "complimentary.mp3",
  },
  {
    english: "concentrating",
    portuguese: "concentrando-se",
    question:
      "It describes the act of focusing all attention, effort, or thought on a specific task or object.",
    audio: "concentrating.mp3",
  },
  {
    english: "unwillingly",
    portuguese: "a contragosto",
    question:
      "It describes doing something with reluctance, resistance, or without a willingness to do so.",
    audio: "unwillingly.mp3",
  },
  {
    english: "uneventful",
    portuguese: "sem acontecimentos",
    question:
      "It describes a situation or period of time that is without interesting or notable events; lacking excitement or drama.",
    audio: "uneventful.mp3",
  },
  {
    english: "anxiously",
    portuguese: "ansiosamente",
    question:
      "It describes doing something with a feeling of unease, nervousness, or apprehension.",
    audio: "anxiously.mp3",
  },
  {
    english: "politeness",
    portuguese: "educação",
    question:
      "It refers to the quality of being courteous, respectful, and having good manners in social interactions.",
    audio: "politeness.mp3",
  },
  {
    english: "suppress",
    portuguese: "suprimir",
    question:
      "It describes the act of restraining, preventing, or inhibiting something from happening or being expressed.",
    audio: "suppress.mp3",
  },
  {
    english: "absence",
    portuguese: "ausência",
    question:
      "It refers to the state or condition of being away or not present; the lack or nonexistence of something.",
    audio: "absence.mp3",
  },
  {
    english: "cheerful",
    portuguese: "alegre",
    question:
      "It describes someone or something that is happy, positive, and full of good spirits.",
    audio: "cheerful.mp3",
  },
  {
    english: "mileage",
    portuguese: "quilometragem",
    question:
      "It refers to the total distance traveled by a vehicle or the number of miles achieved with a certain amount of fuel.",
    audio: "mileage.mp3",
  },
  {
    english: "shuddered",
    portuguese: "estremeceu",
    question:
      "It describes the sudden trembling or shivering movement of the body, usually caused by fear, cold, or strong emotion.",
    audio: "shuddered.mp3",
  },
  {
    english: "thought",
    portuguese: "pensamento",
    question:
      "It refers to the process of thinking, considering, or contemplating something in one's mind.",
    audio: "thought.mp3",
  },

  {
    english: "alertly",
    portuguese: "alerta",
    question:
      "It describes being watchful, attentive, and quick to notice or respond to things.",
    audio: "alertly.mp3",
  },
  {
    english: "glanced",
    portuguese: "olhou rapidamente",
    question:
      "It describes the act of taking a brief or quick look at something or someone.",
    audio: "glanced.mp3",
  },
  {
    english: "self-conscious",
    portuguese: "constrangido",
    question:
      "It describes being excessively aware of oneself, especially in a way that causes discomfort or shyness.",
    audio: "self-conscious.mp3",
  },
  {
    english: "sipped",
    portuguese: "deu um gole",
    question:
      "It describes the action of drinking something slowly and in small amounts, often by taking small sips.",
    audio: "sipped.mp3",
  },
  {
    english: "shurning",
    portuguese: "encolhendo os ombros",
    question:
      "It describes the action of raising and lowering the shoulders in a gesture of doubt, indifference, or uncertainty.",
    audio: "shurning.mp3",
  },
  {
    english: "permit",
    portuguese: "permitir",
    question:
      "It refers to giving authorization, consent, or permission for something to happen or be done.",
    audio: "permit.mp3",
  },
  {
    english: "lashes",
    portuguese: "cílios",
    question:
      "It refers to the hairs that grow on the edge of the eyelids, which help protect the eyes from dust and debris.",
    audio: "lashes.mp3",
  },
  {
    english: "lifted",
    portuguese: "levantou",
    question:
      "It describes the action of raising or elevating something or someone to a higher position.",
    audio: "lifted.mp3",
  },
  {
    english: "laughter",
    portuguese: "riso",
    question:
      "It refers to the sound or act of expressing amusement, mirth, or joy through vocalization.",
    audio: "laughter.mp3",
  },
  {
    english: "pinpoint",
    portuguese: "identificar com precisão",
    question:
      "It describes the act of precisely identifying, locating, or indicating something, often in a detailed or accurate manner.",
    audio: "pinpoint.mp3",
  },
  {
    english: "pondered",
    portuguese: "refletiu",
    question:
      "It describes the act of thinking about something carefully, considering it deeply and at length.",
    audio: "pondered.mp3",
  },
  {
    english: "conceal",
    portuguese: "esconder",
    question:
      "It refers to the act of hiding, covering, or keeping something out of sight or secret.",
    audio: "conceal.mp3",
  },
  {
    english: "harsh",
    portuguese: "severo",
    question:
      "It describes something that is severe, cruel, rough, or unpleasant in manner, appearance, or sound.",
    audio: "harsh.mp3",
  },
  {
    english: "giggled",
    portuguese: "deu risadinhas",
    question:
      "It describes the action of laughing in a light, silly, or childlike manner.",
    audio: "giggled.mp3",
  },
  {
    english: "confided",
    portuguese: "confidenciou",
    question:
      "It describes the act of sharing private or secret information or feelings with someone in a trusting manner.",
    audio: "confided.mp3",
  },
  {
    english: "hissed",
    portuguese: "sibilou",
    question:
      "It describes the sound or act of making a sharp, prolonged sibilant sound like a snake or steam escaping under pressure.",
    audio: "hissed.mp3",
  },
  {
    english: "snickered",
    portuguese: "risadinha",
    question:
      "It describes the action of laughing quietly or in a suppressed manner, often expressing amusement or derision.",
    audio: "snickered.mp3",
  },
  {
    english: "frightened",
    portuguese: "assustado",
    question:
      "It describes the state of feeling afraid, scared, or filled with fear due to something threatening or alarming.",
    audio: "frightened.mp3",
  },
  {
    english: "groaned",
    portuguese: "gemeu",
    question:
      "It describes the sound or act of making a low, deep, and inarticulate moaning sound, often due to pain, discomfort, or dissatisfaction.",
    audio: "groaned.mp3",
  },
];

export const getRandomWord = () => {
  const min = 0;
  const max = words.length - 1;
  const randomId = Math.floor(Math.random() * (max - min + 1)) + min;

  return {
    english: words[randomId].english,
    portuguese: words[randomId].portuguese,
    question: words[randomId].question,
    audio: words[randomId].audio,
  };
};
