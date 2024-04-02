import {
  AccountCreated as AccountCreatedEvent,
} from "../generated/ERC6551Registry/ERC6551Registry"

import { 
  Transfer as TransferSoulLootNftEvent,
} from "../generated/SoulLootNft/SoulLootNft"

import { 
  Transfer as TransferRlootNftEvent,
} from "../generated/RLootNft/SampleLootV2"

import {
  SoulLootNftAccount,
  SoulLootNft,
  User,
  RLootNft
} from "../generated/schema"

export function handleAccountCreated(event: AccountCreatedEvent): void {
  let soulLootNftAccount = new SoulLootNftAccount(
    event.params.account.toHexString()
  )
  soulLootNftAccount.save()
  let soulLootNft = SoulLootNft.load(
    event.params.tokenId.toString()
  )
  if(!soulLootNft) {
    soulLootNft = new SoulLootNft(
      event.params.tokenId.toString()
    )
  }
  soulLootNft.account = event.params.account.toHexString();
  soulLootNft.save();
}

export function handleTransferSoulLootNft(event: TransferSoulLootNftEvent): void {
  let user = User.load(event.params.to.toHexString());
  if(!user) {
    user = new User(event.params.to.toHexString());
    user.save();
  }
  let soulLootNft = SoulLootNft.load(
    event.params.tokenId.toString()
  )
  if(!soulLootNft) {
    soulLootNft = new SoulLootNft(
      event.params.tokenId.toString()
    )
  }
  soulLootNft.owner = event.params.to.toHexString();
  soulLootNft.save();
}

export function handleTransferRLootNft(event: TransferRlootNftEvent): void {
  let rLootNft = RLootNft.load(
    event.params.tokenId.toString()
  )
  if(!rLootNft) {
    rLootNft = new RLootNft(
      event.params.tokenId.toString()
    )
  }
  rLootNft.owner = event.params.to.toHexString();
  rLootNft.save();
}

