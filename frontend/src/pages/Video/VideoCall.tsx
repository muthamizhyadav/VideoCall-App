import React, { useState, useEffect, useRef } from "react";
import SimplePeer, { Instance } from "simple-peer";

const VideoCall = () => {
  const [peer, setPeer] = useState<Instance | null>(null);
  const [localStream, setLocalStream] = useState<MediaStream | null>(null);
  const [remoteStream, setRemoteStream] = useState<MediaStream | null>(null);

  const localVideoRef = useRef<HTMLVideoElement>(null);
  const remoteVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const getLocalStream = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });
        setLocalStream(stream);
      } catch (err) {
        console.error("Error getting local stream", err);
      }
    };

    getLocalStream();
  }, []);

  useEffect(() => {
    if (localStream) {
      const peer = new SimplePeer({ initiator: true, stream: localStream });

      peer.on("signal", (data) => {
        console.log("Signal data", data);
      });

      peer.on("stream", (stream) => {
        setRemoteStream(stream);
        console.log(stream)
      });

      setPeer(peer);
    }
  }, [localStream]);

  const handleSignal = () => {
    // This is where you would receive the signal data from the other peer and pass it to `peer.signal()`
    const signalData = "null";
    peer?.signal(signalData);
  };

  useEffect(() => {
    if (localStream && localVideoRef.current) {
      localVideoRef.current.srcObject = localStream;
    }
    if (remoteStream && remoteVideoRef.current) {
      remoteVideoRef.current.srcObject = remoteStream;
    }
  }, [localStream, remoteStream]);

  return (
    <div>
      <div>
        {localStream && (
          <video
            ref={localVideoRef}
            autoPlay
            muted
            style={{ width: "50%", height: "auto" }}
          />
        )}
      </div>
      <div>
        {remoteStream && (
          <video
            ref={remoteVideoRef}
            autoPlay
            style={{ width: "50%", height: "auto" }}
          />
        )}
      </div>
      <button onClick={handleSignal}>Signal</button>
    </div>
  );
};

export default VideoCall;
