// SPDX-License-Identifier: LGPL-3.0-only
pragma solidity >=0.7.0 <0.9.0;

contract MockGnosisSafe {
  address[] internal owners;

  function setOwner(address _owner) external {
    owners.push(_owner);
  }

  function getOwners() public view returns (address[] memory) {
    return owners;
  }
}
