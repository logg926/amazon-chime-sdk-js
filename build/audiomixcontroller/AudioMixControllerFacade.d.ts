export default interface AudioMixControllerFacade {
    bindAudioElement(element: HTMLAudioElement): Promise<void>;
    unbindAudioElement(): void;
    startMuteAudioOutputFromChime(): void;
    stopMuteAudioOutputFromChime(): void;
}
