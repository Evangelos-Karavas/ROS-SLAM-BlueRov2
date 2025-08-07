# Simultaneous Localization and Mapping algorithm for Blue Rov 2

Each Package inside the /src directory has a README.md file that provides instructions on how to install it properly.

To run this project, the user must install the following packages and add their dependencies to their workspace.

  ### Extra Packages:  
  
      -mavros
      -raspicam_node


  ### The next 3 packages are only necessary for simulation:
    
      -uuv_simulator  
      -freebuoyancy_gazebo   
      -bluerov_ros_playground
    

See [Blue Rov 2 - Blue Robotics](https://bluerobotics.com/store/rov/bluerov2/) to see more information about the underwater vehicle.  
  
See [QGroundControlApp](https://docs.qgroundcontrol.com/master/en/qgc-user-guide/getting_started/download_and_install.html) for simple control of the uuv.

## Robot Terminal Commands:
    
      $   roslaunch bluerov bluerov_r1.launch

      $   rosrun usb_cam usb_cam_node _camera_name:='usb_cam' _cama_frame_id:='usb_cam' _video_device:='/dev/video0' _pixel_format:='yuyv'
      
      $   roslaunch aruco_detect aruco_detect.launch
      
      $   roslaunch fiducial_slam fiducial_slam.launch
      
      $   roslaunch fiducial_slam fiducial_rviz.launch
      
## Simulation Terminal Commands:

      $   roslaunch bluerov_ros_playground user_mav.launch

      $   rosrun usb_cam usb_cam_node _camera_name:='usb_cam' _cama_frame_id:='usb_cam' _video_device:='/dev/video2' _pixel_format:='yuyv'
      
      $    roslaunch aruco_detect aruco_detect.launch
      
      $    roslaunch fiducial_slam fiducial_slam.launch
      
      $    roslaunch fiducial_slam fiducial_rviz.launch


  ![IMG_6544-scaled](https://github.com/user-attachments/assets/ac39478d-ba15-4728-8635-981c3f6bfbec)  
  ![22222](https://github.com/user-attachments/assets/ac2ddf8b-4fad-4890-8763-1b008f9e13f9)  
Feel free to contact me about any questions/problems.

Email: vaggeliskaravas@gmail.com
