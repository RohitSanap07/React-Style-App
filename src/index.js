import { createRoot } from "react-dom/client";

import Winners, { PlayerName,ThankYou } from "./App";

const root = createRoot(document.getElementById("root"));

root.render(<>
<Winners />
<PlayerName name="Neeraj Chopra" emoji="🥈"/>
<PlayerName name="Manu Bhaker" emoji="🥉"/>
<PlayerName name="Swapnil Kusale" emoji="🥉"/>
<PlayerName name="Indian Men's Hockey Team" emoji="🥉"/>
<PlayerName name="Aman Sehrawat" emoji="🥉"/>
<ThankYou/>


</>
)