import { createThirdwebClient } from "thirdweb";

// const clientId: string | undefined = process.env.CLIENT_ID;
// const secretKey: string | undefined = process.env.SECRET_KEY;
const clientId='b112c2712b965db28069ca80af610695'
const secretKey='jQwXhbW0bIx2HxpDEIImb36f7Nj8DoMJw2CSahtuOscNyvOmd_ePlJLT1vyT__g7IObOitQBqo7CdAV7TErAfQ'
if (!clientId || !secretKey) {
    throw new Error("Environment variables CLIENT_ID and SECRET_KEY must be defined");
}

export const client = createThirdwebClient({ 
    clientId,
});

export const clientMain = createThirdwebClient({ 
    clientId,
    secretKey,
});
