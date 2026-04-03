---
title: "Water Control Quality"
status: archived
tech: [ESP32, Flutter, Dart, Arduino, Laravel, Go, MySQL, MQTT]
url: "#"
repo: "https://github.com/Yunnie-pin/Water-Control-Quality"
featured: false
---

# Water Controller IoT

## Overview

Water Controller IoT is a full-stack IoT system that monitors water/soil moisture conditions using sensors. Data from the hardware sensor is sent over the internet to a backend, then displayed in a Flutter mobile app. Users can also remotely control water flow directly from the app based on sensor readings.

![esp32](https://i.imgur.com/AlHdztY_d.webp?maxwidth=760&fidelity=grand)


| Pict1 | Pict2 | Pict3 |
| ----------- | ----------- | -------- |
| ![Dashboard](https://i.imgur.com/uD7tL2q_d.webp?maxwidth=100&fidelity=grand) | ![Add-page](https://i.imgur.com/ZwXiePe_d.webp?maxwidth=100&fidelity=grand) | ![List Page](https://i.imgur.com/7lxgmMe_d.webp?maxwidth=100&fidelity=grand) |

## Tech Stack

- **Arduino / ESP32** — microcontroller that reads the moisture sensor and communicates with the backend
- **Laravel (PHP)** — primary REST API for managing IoT-to-app communication and storing sensor data
- **Go** — alternative API implementation included in the repo
- **Flutter / Dart** — cross-platform mobile client for monitoring and control
- **MySQL** — relational database for persisting sensor readings and device state

## Features

- Real-time moisture/water level monitoring from hardware sensors
- Remote water flow control via mobile app
- Dashboard view with live sensor data
- List page to browse historical sensor readings
- Add/configure new sensor entries

## Challenges

Bridging hardware (Arduino/ESP32) with a web backend required reliable MQTT or HTTP communication, ensuring data consistency even with intermittent device connectivity. The project also includes both a Laravel and a Go API implementation.

## Status
> **Archived** — The project is no longer actively maintained or updated. It was developed as a proof of concept for an IoT-based water control system. While the codebase is available on GitHub, it may not be production-ready or suitable for deployment without further development and testing.

## What I Learned

End-to-end IoT system design — from firmware on microcontrollers to REST APIs to a mobile frontend. Gained experience with hardware-software integration, sensor data pipelines, and building a multi-layer architecture (embedded → backend → mobile).
