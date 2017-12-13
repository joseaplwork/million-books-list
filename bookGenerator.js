const preposition = new Array(
'Above', 'After', 'At', 'Beyond', 'For', 'From', 'In', 'Into', 'On', 'Out of', 'With', 'Without', 'Under'
)

const noun = new Array(
'Abbey', 'Adventure', 'Affair', 'Africa', 'Age', 'Agoroman', 'Alexander', 'Alexander the Great', 'Aladdin', 'Aliens',
'Amulet', 'Angelo', 'Angel', 'Apocalypse', 'Aristotle', 'Armageddon', 'Ash', 'Asylum', 'Atlantis', 'Avenger', 'Awakening',
'Barsac', 'Bat', 'Beard', 'Beast', 'Beasts', 'Big Bad Wolf', 'Birds', 'Birthday Present', 'Bishop', 'Bites',
'Blackwell', 'Blade', 'Blight', 'Blog', 'Blogger', 'Blonde', 'Blood', 'Bloodline', 'Body', 'Book', 'Bookkeeper', 'Bones',
'Boudica', 'Boy', 'Brass', 'Brain', 'Bridge', 'Bronze', 'Books', 'Brother', 'Brothers', 'Bullet', 'Bus', 'Butterfly',
'Cabin', 'Caesar', 'Call', 'Cape', 'Captain Hook', 'Captain Nemo', 'Carnival', 'Case', 'Casket', 'Caverns', 'Cell', 'Cemetery',
'Chain', 'Chance', 'Chicago', 'Childhood', 'Child', 'Children', 'Cindarella', 'Circle', 'Circus', 'City', 'Claim', 'Club', 'Cloven Hoof',
'Coast', 'Cold', 'Comb', 'Comet', 'Compendium', 'Constantine', 'Corpse', 'Cotswold', 'Cove',
'Creek', 'Crows', 'Crown', 'Cry', 'Cthulhu', 'Cup', 'Cupid', 'Curse', 'Cylinder', 'Crypt',
'Dance', 'Dancers', 'Dark', 'Darkness', 'Daughter', 'Dawn', 'Day', 'Daylight', 'Days', 'Da Vinci', 'Death', 'Dead', 'Deception', 'Demon',
'Departed', 'Desert', 'Detective', 'Devil', 'Devils', 'Discovery', 'Doctor', 'Doctor Jeckyll', 'Dog', 'Dome', 'Doom', 'Door', 'Doors',
'Dracula', 'Dragon', 'Dragons', 'Drapes', 'Dream', 'Dusk', 'Dust', 'Dweller',
'Earth', 'Edge', 'Effie', 'Elysium', 'Einstein', 'Emperor', 'Empire', 'Eons', 'Eternity', 'Equation', 'Escape', 'Ether',
'Evolution', 'Exile', 'Express', 'Evil', 'Eye',
'Face', 'Faerie', 'Fangs', 'Farm House', 'Fear', 'Feast', 'Feet', 'Fiend', 'Fire', 'Fish',
'Flame', 'Floor', 'Flower', 'Fog', 'Folk', 'Force', 'Fox', 'Frankenstein', 'Future',
'Gambit', 'Garden', 'Gentleman', 'Ghost', 'Ghostlands', 'Ghoul', 'Girl', 'Gateway', 'Glory', 'Glass',
'Goblet', 'Goblins', 'Gods', 'God', 'Gold', 'Grace', 'Grave', 'Graveyard', 'Guard', 'Guardian', 'Guest', 'Guns', 'Gun', 'Gunfighter', 'Gurov', 'Gunsmoke',
'Hall', 'Hamlet', 'Hand', 'Hands', 'Hare', 'Hate', 'Haunted', 'Health', 'Hearts', 'Heaven', 'He/Him', 'Heist Job', 'Hell', 'Heroes',
'Hieroglyph', 'Highway', 'Hitler', 'Hollywood', 'Home', 'Honor', 'Horde', 'Horror', 'Houdini', 'Hour', 'Hours', 'House',
'Huckleberry Finn', 'Human', 'Hyborian',
'Idol', 'Inheritance', 'Inferno', 'Intention', 'Imaginary', 'Insects', 'Inverness', 'Island',
'Jars', 'Jailer', 'Jenny Everywhere', 'Jewels', 'Joan of Arc', 'Journey', 'Jungle',
'Kaldar', 'Key', 'Kitchen', 'Killer', 'King', 'Kings',
'Labyrinth', 'Lady MacBeth', 'Lamia', 'Law', 'Legacy', 'Letters', 'Life', 'Lightning', 'Link', 'Long John Silver', 'Lord', 'Lovecraft',
'Madness', 'Madman', 'Magic', 'Man', 'Manhattan', 'Manor', 'Manuscript', 'March', 'Marquis de Sade', 'Mars', 'Master', 'Mask', 'Mata Hari',
'Memory', 'Men', 'Mesa', 'Metronome', 'Mind', 'Minutes', 'Mirror', 'Mistletoe',
'Modern', 'Monster', 'Monster-God', 'Moon', 'Moonlight', 'Mountain', 'Mozart', 'Murder', 'Music-Box', 'Mystery',
'Nails', 'Names', 'Napoleon', 'Neighbors', 'Night', 'Nightmare', 'North', 'Nothing', 'Nowhere',
'Odin', 'Opportunity', 'Options', 'Orchid',
'Pain', 'Paladins', 'Paradox', 'Parlor', 'Party', 'Patch', 'Path', 'Patrol', 'People', 'Peter Pan', 'Pets', 'Phantom', 'Pilgrim', 'Piper', 'Pirate',
'Place', 'Plan', 'Plant', 'Player', 'Power', 'Prague', 'Prey', 'Priestess', 'Protest', 'Punch',
'Queen', 'Quest',
'Rabbit', 'Rat', 'Rats', 'Reaper', 'Reckless', 'Reply', 'Return', 'Revenge', 'Revolt', 'Revolution', 'Riders', 'Ring', 'River',
'Room', 'Rulers', 'Rules',
'Salvage', 'Satan', 'Scientist', 'Science', 'Scream', 'Sea', 'Sealed', 'Season', 'Secret',
'Shadows', 'Shadow', 'Shakespeare', 'Shambler', 'Shell', 'Sherlock Holmes', 'She',
'Silence', 'Sip', 'Sky', 'Skull', 'Skunk', 'Slab', 'Sleep', 'Sleepers', 'Snake',
'Soldiers', 'Song', 'Sorcery', 'Soul', 'South', 'Space', 'Spawn', 'Stars', 'Steam', 'Step', 'Stranger', 'Studio', 'Study',
'Suicide', 'Sun', 'Survivors', 'Sword',
'Tale', 'Tartarus', 'Terror', 'Tesla', 'They', 'Thieves', 'Thing', 'Things', 'Thule', 'Thunder', 'Ticket', 'Tiger', 'Time',
'Toad', 'Tomb', 'Tombstone', 'Tommy', 'Tower', 'Trade', 'Trail', 'Train', 'Treasures', 'Trees', 'Tree', 'Tsan-Lo',
'Us',
'Valley', 'Vampire', 'Vengeance', 'Voice', 'Vials',
'Wall', 'Watcher', 'Waters', 'War', 'Wax', 'We', 'Web', 'Weirds', 'What Waits', 'Will', 'Wind', 'Window', 'Wings', 'Witch',
'Wolfhound', 'Wolves', 'Woodcarver', 'Wolf', 'Woman', 'Women', 'Woods', 'World', 'Worm', 'Wrath', 'Wretched', 'Wyatt',
'Zamboula', 'Zombie'
)

const adjective = new Array(
'Accidental', 'Accusing', 'Amazing', 'Atomic', 'Automatic', 'Aztec',
'Bangkok', 'Bad', 'Big', 'Black', 'Bloodstained', 'Blue', 'Broken',
'Clockwork', 'Closing', 'Cold', 'Conquering', 'Corrupt', 'Cosmic', 'Consuming', 'Closed', 'Clutching', 'Copper', 'Crystal',
'Damned', 'Dancing', 'Dark', 'Daylight', 'Dead', 'Dead-Alive', 'Dear', 'Delicate', 'Destroying', 'Different', 'Dimensional',
'Edible', 'English', 'Eternal', 'Evening',
'Fae', 'Fallen', 'Final', 'Flapping', 'Forever', 'Forty', 'Frozen',
'Galvanic', 'Golden', 'Gothic', 'Gray', 'Great', 'Green', 'Grey', 'Grim', 'Grisly',
'Hairy', 'Haunting', 'Hideous', 'Hidden',
'Imitation', 'Invisible', 'Iron',
'Last', 'Lead', 'Living', 'Logical', 'Lost',
'Mad', 'Mechanical', 'Midnight', 'Missing', 'Moonlit', 'Muddy', 'My',
'New', 'Next', 'Noble', 'Nomadic',
'One',
'Perfect', 'Poor', 'Poisoned', 'Priceless',
'Quantum',
'Radient', 'Raw', 'Red',
'Savage', 'Scarlet', 'Second', 'Secret', 'Seven', 'Shattered', 'Silent', 'Silver', 'Six',
'Souls', 'Spare', 'Special', 'Strange', 'Steam-Powered', 'Steel', 'Supreme',
'Third', 'Tragic', 'Twenty', 'Two',
'Ultimate', 'Undead', 'Unknown', 'Unrequited', 'Urban', 'Uncommon', 'Unfaithful', 'Unseen',
'Variable', 'Vampiric', 'Velvet', 'Violet',
'Wayward', 'Weaving', 'Whispering',
'Yellow'
)

const verb = new Array(
'Be',
'Chain', 'Chase', 'Come',
'Die', 'Drag', 'Dream',
'Embrace',
'Fall', 'Forget', 'Fight',
'Go',
'Hang', 'Hang', 'Have',
'Kill',
'Laugh', 'Lie',
'Murder',
'Own',
'Run', 'Ride',
'Save', 'See', 'Speak', 'Steal',
'Trick',
'Go'
)

const verbed = new Array(
'Borrowed', 'Built',
'Came', 'Chained', 'Changed', 'Chased',
'Died', 'Dragged',
'Embraced',
'Fell', 'Forgot', 'Fought',
'Had',
'Hung',
'Killed',
'Laughed', 'Lied',
'Murdered',
'Owned',
'Ran', 'Rode',
'Saw', 'Seduced', 'Spoke',
'Tricked',
'Was', 'Went'
)

const verbs = new Array(
'Comes', 'Chains', 'Changes', 'Chases',
'Dies', 'Drag',
'Embraces',
'Falls', 'Forgets', 'Fights',
'Goes',
'Hangs',
'Has',
'Is',
'Kills',
'Laughs', 'Lies',
'Murders',
'Owns',
'Rides', 'Runs',
'Screams', 'Sees', 'Speaks',
'Tricks',
'Weeps'
)

const verbing = new Array(
'Coming', 'Chaining', 'Changing', 'Chasing', 'Crossing',
'Dragging', 'Dying',
'Embracing',
'Falling', 'Forgetting', 'Fighting',
'Going',
'Hanging',
'Having',
'Killing',
'Laughing', 'Lying',
'Murdering',
'Owning',
'Riding', 'Running', 'Rising',
'Seeing', 'Speaking',
'Tricking'
)

const auxverb = new Array(
'Could', 'Could Not', 'Must', 'Must Not', 'Shall', 'Shall Not', 'Should', 'Should Not', 'That', 'That Never', 'Would', 'Would Not'
)

function _nameStructure () {
	let x = 0;
	x = Math.floor(Math.random() * 45);
	switch (x) {
		case 1:
		return (adjective[a1] + ' ' + noun[n1]);
		case 2:
		return ('The ' + adjective[a1] + ' ' + noun[n1]);
		case 3:
		return (noun[n1] + ' of ' + noun[n2]);
		case 4:
		return ('The ' + noun[n1] + '\'s ' + noun[n2]);
		case 5:
		return ('The ' + noun[n1] + ' of the ' + noun[n2]);
		case 6:
		return ('The ' + noun[n1] + ' of ' + adjective[a1] + ' ' + noun [n2]);
		case 7:
		return ('The ' + noun[n1] + ' and the ' + noun[n2]);
		case 8:
		return (preposition[p] + ' the ' + noun[n1]);
		case 9:
		return ('The ' + noun[n1] + ' ' + preposition[p]);
		case 10:
		return (adjective[a1] + ' ' + noun[n1] + ' of ' + noun[n2]);
		case 11:
		return ('The ' + noun[n1] + ' the ' + noun[n2] + ' ' + verbed[vpa]);
		case 12:
		return ('The ' + noun[n1] + ' ' + preposition[p] + ' the ' + noun[n2]);
		case 13:
		return ('The ' + noun[n1] + ' of the ' + adjective[a1] + ' ' + adjective[a2] + ' ' + noun[n2]);
		case 14:
		return ('The ' + noun[n1] + ' ' + preposition[p] + ' the ' + adjective[a1] + ' ' + noun[n2]);
		case 15:
		return ('The ' + noun[n1] + ' that ' + verbed[vpa] + ' the ' + noun[n2]);
		case 16:
		return ('The ' + noun[n1] + ' of the ' + adjective[a1] + ' ' + noun[n2]);
		case 17:
		return (noun[n1] + ' in ' + adjective[a1] + ' ' + noun[n2]);
		case 18:
		return ('The ' + noun[n1] + ' that ' + auxverb[av] + ' ' + verb[v] + ' ' + noun[n2]);
		case 19:
		return (preposition[p] + ' the ' + adjective[a1] + ' ' + noun[n1]);
		case 20:
		return (noun[n1] + ' ' + verbs[vpr] + ' ' + noun[n2]);
		case 21:
		return (preposition[p] + ' a ' + noun[n1] + ' with a ' + noun[n2]);
		case 22:
		return ('The ' + adjective[a1] + ' ' + adjective[a2] + ' ' + noun[n1]);
		case 23:
		return (noun[n1] + ' ' + verbed[vpa] + ' the ' + noun[n2]);
		case 24:
		return (preposition[p] + ' the ' + noun[n1] + ' of the ' + adjective[a1] + ' ' + noun[n2]);
		case 25:
		return ('The ' + noun[n1] + ' that ' + auxverb[av] + ' ' + verb[v]);
		case 26:
		return ('The ' + adjective[a1] + ' ' + adjective[a2] + ' ' + noun[n1]);
		case 27:
		return ('A ' + adjective[a1] + ' ' + noun[n1] + ' ' + preposition[p] + ' ' + noun[n2]);
		case 28:
		return (verbing[ving] + ' the ' + noun[n1]);
		case 29:
		return (noun[n1] + ' ' + verbed[vpa]);
		case 30:
		return (adjective[a1] + ' ' + noun[n1] + ' ' + preposition[p] + ' ' + adjective[a2] + ' ' + noun[n2]);
		case 31:
		return (adjective[a1] + ' ' + noun[n1] + ', ' + adjective[a1] + ' ' + noun[n2]);
		case 32:
		return (noun[n1] + ', ' + verb[v]);
		case 33:
		return (verbed[vpa] + ' ' + noun[n1]);
		case 34:
		return (verbed[vpa] + ' to ' + verb[v]);
		case 35:
		return (verb[v] + ' ' + noun[n1]);
		case 36:
		return (noun[n1] + '\s ' + noun[n2]);
		case 37:
		return (noun[n1] + ' and ' + noun[n2]);
		case 38:
		return (noun[n1] + ' is ' + adjective[a1]);
		case 39:
		return (noun[n1] + ' ' + noun[n2]);
		case 40:
		return ('The ' + noun[n1] + ' ' + noun[n2]);
		case 41:
		return (noun[n1] + noun[n2]);
		case 42:
		return ('A ' + noun[n1] + ' of ' + noun[n2]);
		case 43:
		return (noun[n1] + ' ' + preposition[p] + ' ' + adjective[a1] + ' ' + noun[n2]);
		case 44:
		return (verbed[vpa] + ' by ' + noun[n1]);
		default:
		return (noun[n1] + ' in the ' + noun[n2]);
	}
}

function _speechpart() {
	n1 = Math.floor(Math.random() * noun.length);
	n2 = Math.floor(Math.random() * noun.length);
	a1 = Math.floor(Math.random() * adjective.length);
	a2 = Math.floor(Math.random() * adjective.length);
	vpa = Math.floor(Math.random() * verbed.length);
	vpr = Math.floor(Math.random() * verbs.length);
	p = Math.floor(Math.random() * preposition.length);
	av = Math.floor(Math.random() * auxverb.length);
	v = Math.floor(Math.random() * verb.length);
	ving = Math.floor(Math.random() * verbing.length);
}

let n1 = 0; //noun
let n2 = 0; //noun
let a1 = 0; //adjective
let a2 = 0; //adjective
let vpa = 0; //verbpast
let vpr = 0; //verbpresent
let p = 0; //preposition
let av = 0; //aux verb
let v = 0; //verb
let ving = 0;

const names = ['abandoned','able','absolute','adorable','adventurous','academic','acceptable','acclaimed','accomplished','accurate','aching','acidic','acrobatic','active','actual','adept','admirable','admired','adolescent','adorable','adored','advanced','afraid','affectionate','aged','aggravating','aggressive','agile','agitated','agonizing','agreeable','ajar','alarmed','alarming','alert','alienated','alive','all','altruistic','amazing','ambitious','ample','amused','amusing','anchored','ancient','angelic','angry','anguished','animated','annual','another','antique','anxious','any','apprehensive','appropriate','apt','arctic','arid','aromatic','artistic','ashamed','assured','astonishing','athletic','attached','attentive','attractive','austere','authentic','authorized','automatic','avaricious','average','aware','awesome','awful','awkward','babyish','bad','back','baggy','bare','barren','basic','beautiful','belated','beloved','beneficial','better','best','bewitched','big','big-hearted','biodegradable','bite-sized','bitter','black','black-and-white','bland','blank','blaring','bleak','blind','blissful','blond','blue','blushing','bogus','boiling','bold','bony','boring','bossy','both','bouncy','bountiful','bowed','brave','breakable','brief','bright','brilliant','brisk','broken','bronze','brown','bruised','bubbly','bulky','bumpy','buoyant','burdensome','burly','bustling','busy','buttery','buzzing','calculating','calm','candid','canine','capital','carefree','careful','careless','caring','cautious','cavernous','celebrated','charming','cheap','cheerful','cheery','chief','chilly','chubby','circular','classic','clean','clear','clear-cut','clever','close','closed','cloudy','clueless','clumsy','cluttered','coarse','cold','colorful','colorless','colossal','comfortable','common','compassionate','competent','complete','complex','complicated','composed','concerned','concrete','confused','conscious','considerate','constant','content','conventional','cooked','cool','cooperative','coordinated','corny','corrupt','costly','courageous','courteous','crafty','crazy','creamy','creative','creepy','criminal','crisp','critical','crooked','crowded','cruel','crushing','cuddly','cultivated','cultured','cumbersome','curly','curvy','cute','cylindrical','damaged','damp','dangerous','dapper','daring','darling','dark','dazzling','dead','deadly','deafening','dear','dearest','decent','decimal','decisive','deep','defenseless','defensive','defiant','deficient','definite','definitive','delayed','delectable','delicious','delightful','delirious','demanding','dense','dental','dependable','dependent','descriptive','deserted','detailed','determined','devoted','different','difficult','digital','diligent','dim','dimpled','dimwitted','direct','disastrous','discrete','disfigured','disgusting','disloyal','dismal','distant','downright','dreary','dirty','disguised','dishonest','dismal','distant','distinct','distorted','dizzy','dopey','doting','double','downright','drab','drafty','dramatic','dreary','droopy','dry','dual','dull','dutiful','each','eager','earnest','early','easy','easy-going','ecstatic','edible','educated','elaborate','elastic','elated','elderly','electric','elegant','elementary','elliptical','embarrassed','embellished','eminent','emotional','empty','enchanted','enchanting','energetic','enlightened','enormous','enraged','entire','envious','equal','equatorial','essential','esteemed','ethical','euphoric','even','evergreen','everlasting','every','evil','exalted','excellent','exemplary','exhausted','excitable','excited','exciting','exotic','expensive','experienced','expert','extraneous','extroverted','extra-large','extra-small','fabulous','failing','faint','fair','faithful','fake','false','familiar','famous','fancy','fantastic','far','faraway','far-flung','far-off','fast','fat','fatal','fatherly','favorable','favorite','fearful','fearless','feisty','feline','female','feminine','few','fickle','filthy','fine','finished','firm','first','firsthand','fitting','fixed','flaky','flamboyant','flashy','flat','flawed','flawless','flickering','flimsy','flippant','flowery','fluffy','fluid','flustered','focused','fond','foolhardy','foolish','forceful','forked','formal','forsaken','forthright','fortunate','fragrant','frail','frank','frayed','free','French','fresh','frequent','friendly','frightened','frightening','frigid','frilly','frizzy','frivolous','front','frosty','frozen','frugal','fruitful','full','fumbling','functional','funny','fussy','fuzzy','gargantuan','gaseous','general','generous','gentle','genuine','giant','giddy','gigantic','gifted','giving','glamorous','glaring','glass','gleaming','gleeful','glistening','glittering','gloomy','glorious','glossy','glum','golden','good','good-natured','gorgeous','graceful','gracious','grand','grandiose','granular','grateful','grave','gray','great','greedy','green','gregarious','grim','grimy','gripping','grizzled','gross','grotesque','grouchy','grounded','growing','growling','grown','grubby','gruesome','grumpy','guilty','gullible','gummy','hairy','half','handmade','handsome','handy','happy','happy-go-lucky','hard','hard-to-find','harmful','harmless','harmonious','harsh','hasty','hateful','haunting','healthy','heartfelt','hearty','heavenly','heavy','hefty','helpful','helpless','hidden','hideous','high','high-level','hilarious','hoarse','hollow','homely','honest','honorable','honored','hopeful','horrible','hospitable','hot','huge','humble','humiliating','humming','humongous','hungry','hurtful','husky','icky','icy','ideal','idealistic','identical','idle','idiotic','idolized','ignorant','ill','illegal','ill-fated','ill-informed','illiterate','illustrious','imaginary','imaginative','immaculate','immaterial','immediate','immense','impassioned','impeccable','impartial','imperfect','imperturbable','impish','impolite','important','impossible','impractical','impressionable','impressive','improbable','impure','inborn','incomparable','incompatible','incomplete','inconsequential','incredible','indelible','inexperienced','indolent','infamous','infantile','infatuated','inferior','infinite','informal','innocent','insecure','insidious','insignificant','insistent','instructive','insubstantial','intelligent','intent','intentional','interesting','internal','international','intrepid','ironclad','irresponsible','irritating','itchy','jaded','jagged','jam-packed','jaunty','jealous','jittery','joint','jolly','jovial','joyful','joyous','jubilant','judicious','juicy','jumbo','junior','jumpy','juvenile','kaleidoscopic','keen','key','kind','kindhearted','kindly','klutzy','knobby','knotty','knowledgeable','knowing','known','kooky','kosher','lame','lanky','large','last','lasting','late','lavish','lawful','lazy','leading','lean','leafy','left','legal','legitimate','light','lighthearted','likable','likely','limited','limp','limping','linear','lined','liquid','little','live','lively','livid','loathsome','lone','lonely','long','long-term','loose','lopsided','lost','loud','lovable','lovely','loving','low','loyal','lucky','lumbering','luminous','lumpy','lustrous','luxurious','mad','made-up','magnificent','majestic','major','male','mammoth','married','marvelous','masculine','massive','mature','meager','mealy','mean','measly','meaty','medical','mediocre','medium','meek','mellow','melodic','memorable','menacing','merry','messy','metallic','mild','milky','mindless','miniature','minor','minty','miserable','miserly','misguided','misty','mixed','modern','modest','moist','monstrous','monthly','monumental','moral','mortified','motherly','motionless','mountainous','muddy','muffled','multicolored','mundane','murky','mushy','musty','muted','mysterious','naive','narrow','nasty','natural','naughty','nautical','near','neat','necessary','needy','negative','neglected','negligible','neighboring','nervous','new','next','nice','nifty','nimble','nippy','nocturnal','noisy','nonstop','normal','notable','noted','noteworthy','novel','noxious','numb','nutritious','nutty','obedient','obese','oblong','oily','oblong','obvious','occasional','odd','oddball','offbeat','offensive','official','old','old-fashioned','only','open','optimal','optimistic','opulent','orange','orderly','organic','ornate','ornery','ordinary','original','other','our','outlying','outgoing','outlandish','outrageous','outstanding','oval','overcooked','overdue','overjoyed','overlooked','palatable','pale','paltry','parallel','parched','partial','passionate','past','pastel','peaceful','peppery','perfect','perfumed','periodic','perky','personal','pertinent','pesky','pessimistic','petty','phony','physical','piercing','pink','pitiful','plain','plaintive','plastic','playful','pleasant','pleased','pleasing','plump','plush','polished','polite','political','pointed','pointless','poised','poor','popular','portly','posh','positive','possible','potable','powerful','powerless','practical','precious','present','prestigious','pretty','precious','previous','pricey','prickly','primary','prime','pristine','private','prize','probable','productive','profitable','profuse','proper','proud','prudent','punctual','pungent','puny','pure','purple','pushy','putrid','puzzled','puzzling','quaint','qualified','quarrelsome','quarterly','queasy','querulous','questionable','quick','quick-witted','quiet','quintessential','quirky','quixotic','quizzical','radiant','ragged','rapid','rare','rash','raw','recent','reckless','rectangular','ready','real','realistic','reasonable','red','reflecting','regal','regular','reliable','relieved','remarkable','remorseful','remote','repentant','required','respectful','responsible','repulsive','revolving','rewarding','rich','rigid','right','ringed','ripe','roasted','robust','rosy','rotating','rotten','rough','round','rowdy','royal','rubbery','rundown','ruddy','rude','runny','rural','rusty','sad','safe','salty','same','sandy','sane','sarcastic','sardonic','satisfied','scaly','scarce','scared','scary','scented','scholarly','scientific','scornful','scratchy','scrawny','second','secondary','second-hand','secret','self-assured','self-reliant','selfish','sentimental','separate','serene','serious','serpentine','several','severe','shabby','shadowy','shady','shallow','shameful','shameless','sharp','shimmering','shiny','shocked','shocking','shoddy','short','short-term','showy','shrill','shy','sick','silent','silky','silly','silver','similar','simple','simplistic','sinful','single','sizzling','skeletal','skinny','sleepy','slight','slim','slimy','slippery','slow','slushy','small','smart','smoggy','smooth','smug','snappy','snarling','sneaky','sniveling','snoopy','sociable','soft','soggy','solid','somber','some','spherical','sophisticated','sore','sorrowful','soulful','soupy','sour','Spanish','sparkling','sparse','specific','spectacular','speedy','spicy','spiffy','spirited','spiteful','splendid','spotless','spotted','spry','square','squeaky','squiggly','stable','staid','stained','stale','standard','starchy','stark','starry','steep','sticky','stiff','stimulating','stingy','stormy','straight','strange','steel','strict','strident','striking','striped','strong','studious','stunning','stupendous','stupid','sturdy','stylish','subdued','submissive','substantial','subtle','suburban','sudden','sugary','sunny','super','superb','superficial','superior','supportive','sure-footed','surprised','suspicious','svelte','sweaty','sweet','sweltering','swift','sympathetic','tall','talkative','tame','tan','tangible','tart','tasty','tattered','taut','tedious','teeming','tempting','tender','tense','tepid','terrible','terrific','testy','thankful','that','these','thick','thin','third','thirsty','this','thorough','thorny','those','thoughtful','threadbare','thrifty','thunderous','tidy','tight','timely','tinted','tiny','tired','torn','total','tough','traumatic','treasured','tremendous','tragic','trained','tremendous','triangular','tricky','trifling','trim','trivial','troubled','true','trusting','trustworthy','trusty','truthful','tubby','turbulent','twin','ugly','ultimate','unacceptable','unaware','uncomfortable','uncommon','unconscious','understated','unequaled','uneven','unfinished','unfit','unfolded','unfortunate','unhappy','unhealthy','uniform','unimportant','unique','united','unkempt','unknown','unlawful','unlined','unlucky','unnatural','unpleasant','unrealistic','unripe','unruly','unselfish','unsightly','unsteady','unsung','untidy','untimely','untried','untrue','unused','unusual','unwelcome','unwieldy','unwilling','unwitting','unwritten','upbeat','upright','upset','urban','usable','used','useful','useless','utilized','utter','vacant','vague','vain','valid','valuable','vapid','variable','vast','velvety','venerated','vengeful','verifiable','vibrant','vicious','victorious','vigilant','vigorous','villainous','violet','violent','virtual','virtuous','visible','vital','vivacious','vivid','voluminous','wan','warlike','warm','warmhearted','warped','wary','wasteful','watchful','waterlogged','watery','wavy','wealthy','weak','weary','webbed','wee','weekly','weepy','weighty','weird','welcome','well-documented','well-groomed','well-informed','well-lit','well-made','well-off','well-to-do','well-worn','wet','which','whimsical','whirlwind','whispered','white','whole','whopping','wicked','wide','wide-eyed','wiggly','wild','willing','wilted','winding','windy','winged','wiry','wise','witty','wobbly','woeful','wonderful','wooden','woozy','wordy','worldly','worn','worried','worrisome','worse','worst','worthless','worthwhile','worthy','wrathful','wretched','writhing','wrong','wry','yawning','yearly','yellow','yellowish','young','youthful','yummy','zany','zealous','zesty','zigzag','rocky'];

const lastNames = ['people','history','way','art','world','information','map','family','government','health','system','computer','meat','year','thanks','music','person','reading','method','data','food','understanding','theory','law','bird','literature','problem','software','control','knowledge','power','ability','economics','love','internet','television','science','library','nature','fact','product','idea','temperature','investment','area','society','activity','story','industry','media','thing','oven','community','definition','safety','quality','development','language','management','player','variety','video','week','security','country','exam','movie','organization','equipment','physics','analysis','policy','series','thought','basis','boyfriend','direction','strategy','technology','army','camera','freedom','paper','environment','child','instance','month','truth','marketing','university','writing','article','department','difference','goal','news','audience','fishing','growth','income','marriage','user','combination','failure','meaning','medicine','philosophy','teacher','communication','night','chemistry','disease','disk','energy','nation','road','role','soup','advertising','location','success','addition','apartment','education','math','moment','painting','politics','attention','decision','event','property','shopping','student','wood','competition','distribution','entertainment','office','population','president','unit','category','cigarette','context','introduction','opportunity','performance','driver','flight','length','magazine','newspaper','relationship','teaching','cell','dealer','debate','finding','lake','member','message','phone','scene','appearance','association','concept','customer','death','discussion','housing','inflation','insurance','mood','woman','advice','blood','effort','expression','importance','opinion','payment','reality','responsibility','situation','skill','statement','wealth','application','city','county','depth','estate','foundation','grandmother','heart','perspective','photo','recipe','studio','topic','collection','depression','imagination','passion','percentage','resource','setting','ad','agency','college','connection','criticism','debt','description','memory','patience','secretary','solution','administration','aspect','attitude','director','personality','psychology','recommendation','response','selection','storage','version','alcohol','argument','complaint','contract','emphasis','highway','loss','membership','possession','preparation','steak','union','agreement','cancer','currency','employment','engineering','entry','interaction','limit','mixture','preference','region','republic','seat','tradition','virus','actor','classroom','delivery','device','difficulty','drama','election','engine','football','guidance','hotel','match','owner','priority','protection','suggestion','tension','variation','anxiety','atmosphere','awareness','bread','climate','comparison','confusion','construction','elevator','emotion','employee','employer','guest','height','leadership','mall','manager','operation','recording','respect','sample','transportation','boring','charity','cousin','disaster','editor','efficiency','excitement','extent','feedback','guitar','homework','leader','mom','outcome','permission','presentation','promotion','reflection','refrigerator','resolution','revenue','session','singer','tennis','basket','bonus','cabinet','childhood','church','clothes','coffee','dinner','drawing','hair','hearing','initiative','judgment','lab','measurement','mode','mud','orange','poetry','police','possibility','procedure','queen','ratio','relation','restaurant','satisfaction','sector','signature','significance','song','tooth','town','vehicle','volume','wife','accident','airport','appointment','arrival','assumption','baseball','chapter','committee','conversation','database','enthusiasm','error','explanation','farmer','gate','girl','hall','historian','hospital','injury','instruction','maintenance','manufacturer','meal','perception','pie','poem','presence','proposal','reception','replacement','revolution','river','son','speech','tea','village','warning','winner','worker','writer','assistance','breath','buyer','chest','chocolate','conclusion','contribution','cookie','courage','desk','drawer','establishment','examination','garbage','grocery','honey','impression','improvement','independence','insect','inspection','inspector','king','ladder','menu','penalty','piano','potato','profession','professor','quantity','reaction','requirement','salad','sister','supermarket','tongue','weakness','wedding','affair','ambition','analyst','apple','assignment','assistant','bathroom','bedroom','beer','birthday','celebration','championship','cheek','client','consequence','departure','diamond','dirt','ear','fortune','friendship','funeral','gene','girlfriend','hat','indication','intention','lady','midnight','negotiation','obligation','passenger','pizza','platform','poet','pollution','recognition','reputation','shirt','speaker','stranger','surgery','sympathy','tale','throat','trainer','uncle','youth','time','work','film','water','money','example','while','business','study','game','life','form','air','day','place','number','part','field','fish','back','process','heat','hand','experience','job','book','end','point','type','home','economy','value','body','market','guide','interest','state','radio','course','company','price','size','card','list','mind','trade','line','care','group','risk','word','fat','force','key','light','training','name','school','top','amount','level','order','practice','research','sense','service','piece','web','boss','sport','fun','house','page','term','test','answer','sound','focus','matter','kind','soil','board','oil','picture','access','garden','range','rate','reason','future','site','demand','exercise','image','case','cause','coast','action','age','bad','boat','record','result','section','building','mouse','cash','class','period','plan','store','tax','side','subject','space','rule','stock','weather','chance','figure','man','model','source','beginning','earth','program','chicken','design','feature','head','material','purpose','question','rock','salt','act','birth','car','dog','object','scale','sun','note','profit','rent','speed','style','war','bank','craft','half','inside','outside','standard','bus','exchange','eye','fire','position','pressure','stress','advantage','benefit','box','frame','issue','step','cycle','face','item','metal','paint','review','room','screen','structure','view','account','ball','discipline','medium','share','balance','bit','black','bottom','choice','gift','impact','machine','shape','tool','wind','address','average','career','culture','morning','pot','sign','table','task','condition','contact','credit','egg','hope','ice','network','north','square','attempt','date','effect','link','post','star','voice','capital','challenge','friend','self','shot','brush','couple','exit','front','function','lack','living','plant','plastic','spot','summer','taste','theme','track','wing','brain','button','click','desire','foot','gas','influence','notice','rain','wall','base','damage','distance','feeling','pair','savings','staff','sugar','target','text','animal','author','budget','discount','file','ground','lesson','minute','officer','phase','reference','register','sky','stage','stick','title','trouble','bowl','bridge','campaign','character','club','edge','evidence','fan','letter','lock','maximum','novel','option','pack','park','quarter','skin','sort','weight','baby','background','carry','dish','factor','fruit','glass','joint','master','muscle','red','strength','traffic','trip','vegetable','appeal','chart','gear','ideal','kitchen','land','log','mother','net','party','principle','relative','sale','season','signal','spirit','street','tree','wave','belt','bench','commission','copy','drop','minimum','path','progress','project','sea','south','status','stuff','ticket','tour','angle','blue','breakfast','confidence','daughter','degree','doctor','dot','dream','duty','essay','father','fee','finance','hour','juice','luck','milk','mouth','peace','pipe','stable','storm','substance','team','trick','afternoon','bat','beach','blank','catch','chain','consideration','cream','crew','detail','gold','interview','kid','mark','mission','pain','pleasure','score','screw','sex','shop','shower','suit','tone','window','agent','band','bath','block','bone','calendar','candidate','cap','coat','contest','corner','court','cup','district','door','east','finger','garage','guarantee','hole','hook','implement','layer','lecture','lie','manner','meeting','nose','parking','partner','profile','rice','routine','schedule','swimming','telephone','tip','winter','airline','bag','battle','bed','bill','bother','cake','code','curve','designer','dimension','dress','ease','emergency','evening','extension','farm','fight','gap','grade','holiday','horror','horse','host','husband','loan','mistake','mountain','nail','noise','occasion','package','patient','pause','phrase','proof','race','relief','sand','sentence','shoulder','smoke','stomach','string','tourist','towel','vacation','west','wheel','wine','arm','aside','associate','bet','blow','border','branch','breast','brother','buddy','bunch','chip','coach','cross','document','draft','dust','expert','floor','god','golf','habit','iron','judge','knife','landscape','league','mail','mess','native','opening','parent','pattern','pin','pool','pound','request','salary','shame','shelter','shoe','silver','tackle','tank','trust','assist','bake','bar','bell','bike','blame','boy','brick','chair','closet','clue','collar','comment','conference','devil','diet','fear','fuel','glove','jacket','lunch','monitor','mortgage','nurse','pace','panic','peak','plane','reward','row','sandwich','shock','spite','spray','surprise','till','transition','weekend','welcome','yard','alarm','bend','bicycle','bite','blind','bottle','cable','candle','clerk','cloud','concert','counter','flower','grandfather','harm','knee','lawyer','leather','load','mirror','neck','pension','plate','purple','ruin','ship','skirt','slice','snow','specialist','stroke','switch','trash','tune','zone','anger','award','bid','bitter','boot','bug','camp','candy','carpet','cat','champion','channel','clock','comfort','cow','crack','engineer','entrance','fault','grass','guy','hell','highlight','incident','island','joke','jury','leg','lip','mate','motor','nerve','passage','pen','pride','priest','prize','promise','resident','resort','ring','roof','rope','sail','scheme','script','sock','station','toe','tower','truck','witness','can','will','other','use','make','good','look','help','go','great','being','still','public','read','keep','start','give','human','local','general','specific','long','play','feel','high','put','common','set','change','simple','past','big','possible','particular','major','personal','current','national','cut','natural','physical','show','try','check','second','call','move','pay','let','increase','single','individual','turn','ask','buy','guard','hold','main','offer','potential','professional','international','travel','cook','alternative','special','working','whole','dance','excuse','cold','commercial','low','purchase','deal','primary','worth','fall','necessary','positive','produce','search','present','spend','talk','creative','tell','cost','drive','green','support','glad','remove','return','run','complex','due','effective','middle','regular','reserve','independent','leave','original','reach','rest','serve','watch','beautiful','charge','active','break','negative','safe','stay','visit','visual','affect','cover','report','rise','walk','white','junior','pick','unique','classic','final','lift','mix','private','stop','teach','western','concern','familiar','fly','official','broad','comfortable','gain','rich','save','stand','young','heavy','lead','listen','valuable','worry','handle','leading','meet','release','sell','finish','normal','press','ride','secret','spread','spring','tough','wait','brown','deep','display','flow','hit','objective','shoot','touch','cancel','chemical','cry','dump','extreme','push','conflict','eat','fill','formal','jump','kick','opposite','pass','pitch','remote','total','treat','vast','abuse','beat','burn','deposit','print','raise','sleep','somewhere','advance','consist','dark','double','draw','equal','fix','hire','internal','join','kill','sensitive','tap','win','attack','claim','constant','drag','drink','guess','minor','pull','raw','soft','solid','wear','weird','wonder','annual','count','dead','doubt','feed','forever','impress','repeat','round','sing','slide','strip','wish','combine','command','dig','divide','equivalent','hang','hunt','initial','march','mention','spiritual','survey','tie','adult','brief','crazy','escape','gather','hate','prior','repair','rough','sad','scratch','sick','strike','employ','external','hurt','illegal','laugh','lay','mobile','nasty','ordinary','respond','royal','senior','split','strain','struggle','swim','train','upper','wash','yellow','convert','crash','dependent','fold','funny','grab','hide','miss','permit','quote','recover','resolve','roll','sink','slip','spare','suspect','sweet','swing','twist','upstairs','usual','abroad','brave','calm','concentrate','estimate','grand','male','mine','prompt','quiet','refuse','regret','reveal','rush','shake','shift','shine','steal','suck','surround','bear','brilliant','dare','dear','delay','drunk','female','hurry','inevitable','invite','kiss','neat','pop','punch','quit','reply','representative','resist','rip','rub','silly','smile','spell','stretch','stupid','tear','temporary','tomorrow','wake','wrap','yesterday','Thomas','Tom','Lieuwe'];

const genres = ['Adventure', 'Children', 'Drama', 'Fantasy', 'Horror', 'Humor', 'Mystery', 'Nonfiction', 'Romance', 'Sci-Fi'];

function _capFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function _getRandomInt(min, max) {
  	return Math.floor(Math.random() * (max - min)) + min;
}

function generateName(){
	const fullname = _capFirst(names[_getRandomInt(0, names.length)]) + ' ' + _capFirst(lastNames[_getRandomInt(0, lastNames.length)]);
	return fullname;
}

function generateGenre(){
	const genre = _capFirst(genres[_getRandomInt(0, genres.length)]);
	return genre;
}

function generateAuthorGender(bool) {
  return {
    id: bool ? 'authorGenderFemale' : 'authorGenderMale',
    value: bool ? 'female' : 'male',
  }
}

function generatePublishDate(){
  const start = new Date(1970, 0, 1);
  const end = new Date();
  let d = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [day, month, year].join('/');
}

function generateTitle() {
	_speechpart();
	return _nameStructure();
}

module.exports = {
  generateTitle,
  generateName,
  generateGenre,
  generateAuthorGender,
  generatePublishDate
};
