# replit.md

## Overview

This is an interactive birthday surprise web application built as a visual novel/mini-game experience. The application tells a story through multiple scenes featuring animated characters (rabbits and pandas) and includes interactive elements like object collection and memory browsing. The project is designed as a personalized gift, specifically created for someone nicknamed "Chingbaby" with content in Traditional Chinese.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The application uses a single-page architecture with scene-based navigation:
- **Static HTML Structure**: All scenes are pre-loaded in the DOM with CSS-based visibility toggling
- **CSS Animations**: Scene transitions use opacity and visibility properties with smooth transitions
- **Responsive Design**: Uses aspect-ratio CSS property to maintain consistent layout across devices
- **Component-Based Organization**: Each scene is a separate div container with specific styling and interactive elements

### Backend Architecture
The backend follows a minimal Flask pattern:
- **Single Route Application**: Uses one main route serving the index template
- **Template Rendering**: Leverages Flask's Jinja2 templating for static asset management
- **Environment Configuration**: Session secrets managed through environment variables with fallback defaults
- **Development-Ready Setup**: Configured for debug mode with host binding for development environments

### Game Logic Architecture
- **State Management**: Global JavaScript variables track game progress (current scene, found objects, memory navigation)
- **Event-Driven Interactions**: Click handlers manage user interactions and scene progression
- **Audio System**: Web Audio API integration for sound effects with graceful fallback
- **Scene Flow Control**: Linear progression through predefined scenes with conditional transitions

### Asset Management
- **External Image Hosting**: Uses Google Cloud Storage for character and object images
- **Static File Organization**: CSS and JavaScript files organized in Flask's static directory structure
- **Font Integration**: Google Fonts (Noto Sans TC) for Traditional Chinese text support

## External Dependencies

### Frontend Dependencies
- **Google Fonts API**: Noto Sans TC font family for Traditional Chinese character display
- **Google Cloud Storage**: Image asset hosting for game characters and objects
- **Web Audio API**: Browser-native audio capabilities for sound effects

### Backend Dependencies
- **Flask Framework**: Python web framework for serving the application
- **Jinja2 Templating**: Template engine (included with Flask) for HTML rendering

### Development Dependencies
- **Python Standard Library**: OS module for environment variable management
- **Logging Module**: Built-in Python logging for debug information

### Browser Requirements
- **Modern CSS Support**: Requires aspect-ratio, flexbox, and CSS transitions
- **JavaScript ES6**: Uses modern JavaScript features like const/let and arrow functions
- **Audio Context API**: Optional Web Audio API support for enhanced experience