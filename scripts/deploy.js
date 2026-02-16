const hre = require("hardhat");
const crypto = require("crypto");

async function main() {
    // 1. Deploy
    const Gehna = await hre.ethers.getContractFactory("Gehna");
    const gehna = await Gehna.deploy();
    await gehna.waitForDeployment();
    const contractAddress = await gehna.getAddress();

    console.log(`[SINGULARITY] Gehna deployed to: ${contractAddress}`);

    // 2. The Requirement
    const hash = crypto.createHash("sha256").update(Buffer.from(contractAddress.slice(2), 'hex')).digest('hex');
    const expectedSenderParams = "0x" + hash.slice(-40); 

    console.log(`[REQUIREMENT] The Black Hole demands a transaction from: ${expectedSenderParams}`);

    // 3. The Attempt
    const [deployer] = await hre.ethers.getSigners();
    console.log(`[ATTEMPT] Xavier (${deployer.address}) tries to set the Truth...`);

    try {
        const tx = await gehna.setTruth("I AM XAVIER");
        await tx.wait();
        console.log("[SUCCESS] Xavier escaped!");
    } catch (error) {
        console.log("\n[FAILURE] THE TRAP SNAP SHUT.");
        console.log("Reason: The Deployer is not the Reflection of the Contract.");
    }
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});