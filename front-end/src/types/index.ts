/**
 * API Types
 */
export interface Player {
    firstName: string,
    lastName: string,
    position: string,
    avatar: string
}

export interface EmergencyContact {
    firstName: string
    lastName: string
    phoneNumber: string
}

export interface Trip {
    tripName: string
    startDate: string
    endDate: string
}


/**
 * Drag n' Drop Types
 */
// Augmented to include info used for Dnd
export interface LineupPlayer extends Player{
    index: number
}

export enum DndType {
    PLAYER_CARD = "playerCard"
}

export interface DndPlayerCardDragObject {
    type: DndType
    player?: LineupPlayer
    dragPosition: number
}
