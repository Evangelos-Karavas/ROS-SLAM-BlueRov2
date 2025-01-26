Simultaneous Localization and Mapping algorithm for UUV (Blue Rov 2) on ROS-Melodic (Robot Operating System)  

  ![IMG_6544-scaled](https://github.com/user-attachments/assets/ac39478d-ba15-4728-8635-981c3f6bfbec)  
Each Package inside the /src directory has a README.md file giving instructions on how to install each package properly  
To run this project the user needs to install the below extra packages and the dependencies into their ROS1-Melodic workspace

    (Extra Packages needed)  
  
      -mavros
      -raspicam_node

    All the commands needed are located in a .txt file inside the All_Files_For_Use directory 
    *For more information look at the commands file provided.

    (The next 2 packages are only necessary for simulation)  
    
      -uuv_simulator  
      -freebuoyancy_gazebo   
      -bluerov_ros_playground
    

Click [Blue Rov 2 - Blue Robotics]([quora.com/profile/Ashish-Kulkarni-100](https://bluerobotics.com/store/rov/bluerov2/)) to see more information about the underwater vehicle.  
  
Also the [QGroundControlApp]([quora.com/profile/Ashish-Kulkarni-100]([https://bluerobotics.com/store/rov/bluerov2/](https://docs.qgroundcontrol.com/master/en/qgc-user-guide/getting_started/download_and_install.html))) is available giving simple use of the robotic vehicle (Moving the robot and adjusting the front camera).

SLAM Commands:
    
      $  roslaunch bluerov bluerov_r1.launch

      $  rosrun usb_cam usb_cam_node _camera_name:='usb_cam' _cama_frame_id:='usb_cam' _video_device:='/dev/video2' _pixel_format:='yuyv'
      
      $   roslaunch aruco_detect aruco_detect.launch
      
      $   roslaunch fiducial_slam fiducial_slam.launch
      
      $   roslaunch fiducial_slam fiducial_rviz.launch
      
======================================================================================================================================================

      $  roslaunch bluerov_ros_playground user_mav.launch

      $  rosrun usb_cam usb_cam_node _camera_name:='usb_cam' _cama_frame_id:='usb_cam' _video_device:='/dev/video2' _pixel_format:='yuyv'
      
      $   roslaunch aruco_detect aruco_detect.launch
      
      $   roslaunch fiducial_slam fiducial_slam.launch
      
      $   roslaunch fiducial_slam fiducial_rviz.launch
