import {createModularAccountAlchemyClient} from "@alchemy/aa-alchemy";
import {arbitrumSepolia, LocalAccountSigner} from "@alchemy/aa-core";


export const send = async (to: `0x${string}`, amount: number) => {

    const smartAccountClient = await createModularAccountAlchemyClient({
        apiKey: "",
        chain: arbitrumSepolia,
        factoryAddress: `0xe5b2197aD7168568AA28c86faA8A1bCD7Ff21D20`,
        signer: LocalAccountSigner.mnemonicToAccountSigner("congress unknown glimpse decrease youth march auction fashion relief bench shuffle orphan"),
    });

    const smartAccountAddress = smartAccountClient.getAddress;
    console.log('smartAccountAddress:',smartAccountAddress);

    const signature = smartAccountClient.account.signMessage({
        message: { raw: '0x0'},
    }) // hex string
    // TODO
}