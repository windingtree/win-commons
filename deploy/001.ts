import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { ethers } from 'hardhat';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;

  const { deployer, alice, bob, carol } = await getNamedAccounts();

  // --- Account listing ---
  console.log(`Deployer: ${deployer}`);

  // --- Deploy the contract
  const mockGnosisSafe = await deploy('MockGnosisSafe', {
    from: deployer,
    log: true,
    autoMine: true
  });

  if (mockGnosisSafe.newlyDeployed) {
    console.log(
      `Contract MockGnosisSafe deployed at ${mockGnosisSafe.address} using ${mockGnosisSafe.receipt?.gasUsed} gas`
    );

    const safeFactory = await ethers.getContractFactory('MockGnosisSafe');
    const safe = safeFactory.attach(mockGnosisSafe.address);

    await Promise.all([alice, bob, carol].map((address) => safe.setOwner(address, { from: deployer })));
  }
};

export default func;
func.tags = ['MockGnosisSafe'];
